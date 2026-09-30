import { useEffect, useState } from 'react'
import { Info, Layers, Sparkles } from 'lucide-react'
import PageContainer from '@/components/common/PageContainer'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import WasteUpload from '@/pages/WasteClassification/components/WasteUpload'
import ClassificationResult from '@/pages/WasteClassification/components/ClassificationResult'
import DisposalRecommendation from '@/pages/WasteClassification/components/DisposalRecommendation'
import ClassificationSteps from '@/pages/WasteClassification/components/ClassificationSteps'
import { classifyWasteImage } from '@/services/classification'

const ACCEPTED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024 // 10 MB

function validateFile(file) {
  if (!file) {
    return 'Please select an image to continue.'
  }
  if (!ACCEPTED_TYPES.includes(file.type)) {
    return 'Unsupported file type. Please upload a JPG, JPEG, PNG, or WEBP image.'
  }
  if (file.size > MAX_FILE_SIZE_BYTES) {
    return 'This file is too large. Please upload an image under 10 MB.'
  }
  return ''
}

function WasteClassification() {
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('')
  const [error, setError] = useState('')

  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [devNotice, setDevNotice] = useState('')

  // Reserved for the future AI/backend response. Never populated with fake
  // data — only ever set from a real classifyWasteImage() response.
  const [result, setResult] = useState(null)
  const [disposal, setDisposal] = useState(null)

  // Ensure the object URL created for the preview is always released,
  // both when it changes and when the component unmounts.
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl)
      }
    }
  }, [previewUrl])

  function resetResults() {
    setResult(null)
    setDisposal(null)
    setDevNotice('')
  }

  function handleFilesSelected(fileList) {
    const nextFile = fileList?.[0]
    if (!nextFile) return

    const validationError = validateFile(nextFile)

    if (validationError) {
      setError(validationError)
      return
    }

    setError('')
    resetResults()

    setPreviewUrl((currentUrl) => {
      if (currentUrl) URL.revokeObjectURL(currentUrl)
      return URL.createObjectURL(nextFile)
    })
    setFile(nextFile)
  }

  function handleRemove() {
    setFile(null)
    setError('')
    resetResults()
    setPreviewUrl((currentUrl) => {
      if (currentUrl) URL.revokeObjectURL(currentUrl)
      return ''
    })
  }

  async function handleClassify() {
    if (!file || error || isAnalyzing) return

    setIsAnalyzing(true)
    setDevNotice('')

    try {
      // classifyWasteImage is a placeholder today — see services/classification.js.
      // It intentionally rejects until the real backend/model is connected.
      const response = await classifyWasteImage(file)
      setResult(response)
      setDisposal(response?.disposal ?? null)
    } catch (classificationError) {
      setDevNotice(
        classificationError.message ||
          'AI classification will be connected in the next integration stage.',
      )
    } finally {
      setIsAnalyzing(false)
    }
  }

  const isClassifyDisabled = !file || Boolean(error) || isAnalyzing

  return (
    <PageContainer
      title="AI Waste Classification"
      description="Upload an image of a waste item and use AI to identify its category and understand how it should be handled."
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4">
          <WasteUpload
            file={file}
            previewUrl={previewUrl}
            error={error}
            onFilesSelected={handleFilesSelected}
            onRemove={handleRemove}
          />

          <Button
            type="button"
            variant="primary"
            size="lg"
            fullWidth
            onClick={handleClassify}
            disabled={isClassifyDisabled}
            loading={isAnalyzing}
            className="sm:w-auto"
          >
            <Sparkles className="size-4" aria-hidden="true" />
            Classify Waste
          </Button>

          {devNotice && (
            <p
              role="status"
              className="flex items-start gap-2 rounded-lg bg-info-muted px-3 py-2 text-body-sm text-info-foreground"
            >
              <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {devNotice}
            </p>
          )}
        </div>

        <div className="space-y-6">
          <ClassificationResult result={result} isAnalyzing={isAnalyzing} />
          <DisposalRecommendation disposal={disposal} />
        </div>
      </div>

      <div className="mt-8">
        <ClassificationSteps />

        <Card padding="md">
          <div className="flex items-start gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary-muted text-secondary">
              <Layers className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-body font-semibold text-foreground">Supported Waste Types</h2>
              <p className="mt-1 text-body-sm text-muted-foreground">
                The classification model will support defined waste categories once the AI
                model is integrated.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </PageContainer>
  )
}

export default WasteClassification