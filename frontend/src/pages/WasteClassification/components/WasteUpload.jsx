import { useRef, useState } from 'react'
import { AlertCircle, UploadCloud } from 'lucide-react'
import Card from '@/components/ui/Card'
import ImagePreview from '@/pages/WasteClassification/components/ImagePreview'
import { cn } from '@/utils/cn'

const ACCEPTED_INPUT_ATTR = 'image/jpeg,image/jpg,image/png,image/webp'

function WasteUpload({ file, previewUrl, error, onFilesSelected, onRemove }) {
  const fileInputRef = useRef(null)
  const [dragActive, setDragActive] = useState(false)

  function openFileDialog() {
    fileInputRef.current?.click()
  }

  function handleInputChange(event) {
    onFilesSelected(event.target.files)
    // Reset so selecting the same file again still fires onChange.
    event.target.value = ''
  }

  function handleDragOver(event) {
    event.preventDefault()
    setDragActive(true)
  }

  function handleDragLeave(event) {
    event.preventDefault()
    setDragActive(false)
  }

  function handleDrop(event) {
    event.preventDefault()
    setDragActive(false)
    onFilesSelected(event.dataTransfer.files)
  }

  return (
    <Card padding="lg">
      {/* Always-present, keyboard/screen-reader accessible file input.
          Drag-and-drop is an enhancement, not the only way to select a file. */}
      <input
        ref={fileInputRef}
        type="file"
        id="waste-image-input"
        accept={ACCEPTED_INPUT_ATTR}
        onChange={handleInputChange}
        aria-label="Upload a waste image"
        className="sr-only"
      />

      {!file ? (
        <button
          type="button"
          onClick={openFileDialog}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            'flex w-full flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-6 py-14 text-center transition-colors duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ring-offset',
            dragActive
              ? 'border-primary bg-primary-muted/60'
              : 'border-border-strong bg-surface-muted hover:border-primary/50',
          )}
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-primary-muted text-primary">
            <UploadCloud className="size-7" aria-hidden="true" />
          </span>

          <div>
            <p className="text-body font-semibold text-foreground">Upload a waste image</p>
            <p className="mt-1 text-body-sm text-muted-foreground">
              Drag and drop an image here, or click to browse
            </p>
          </div>

          <div className="mt-1 flex flex-col items-center gap-1 text-caption text-muted">
            <span>Accepted formats: JPG, JPEG, PNG, WEBP</span>
            <span>Maximum size: 10 MB</span>
          </div>
        </button>
      ) : (
        <ImagePreview
          file={file}
          previewUrl={previewUrl}
          onRemove={onRemove}
          onReplaceClick={openFileDialog}
        />
      )}

      {error && (
        <p
          role="alert"
          className="mt-4 flex items-start gap-2 rounded-lg bg-error-muted px-3 py-2 text-body-sm text-error-foreground"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </Card>
  )
}

export default WasteUpload