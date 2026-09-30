import { useMemo } from 'react'
import { RefreshCcw, X } from 'lucide-react'
import Button from '@/components/ui/Button'

function formatFileSize(bytes) {
  if (!Number.isFinite(bytes)) return ''
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function ImagePreview({ file, previewUrl, onRemove, onReplaceClick }) {
  const sizeLabel = useMemo(() => formatFileSize(file?.size), [file])

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
      <div className="mx-auto w-full max-w-xs shrink-0 overflow-hidden rounded-xl border border-border bg-surface-muted sm:mx-0">
        <img
          src={previewUrl}
          alt={`Preview of ${file?.name ?? 'selected waste image'}`}
          className="aspect-square w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <div>
          <p className="break-all text-body-sm font-semibold text-foreground">{file?.name}</p>
          <p className="mt-0.5 text-caption text-muted-foreground">{sizeLabel}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="outline" size="sm" onClick={onReplaceClick}>
            <RefreshCcw className="size-4" aria-hidden="true" />
            Replace image
          </Button>
          <Button type="button" variant="ghost" size="sm" onClick={onRemove}>
            <X className="size-4" aria-hidden="true" />
            Remove
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ImagePreview