import { Document, Page, pdfjs } from 'react-pdf'
import { useEffect, useRef, useState } from 'react'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Set worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString()

export function ResumePdf() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const pageRef = useRef<HTMLDivElement>(null)

  const [width, setWidth] = useState<number>()
  const [predictedHeight, setPredictedHeight] = useState<number>()
  const [actualHeight, setActualHeight] = useState<number>()
  const [visible, setVisible] = useState(true)

  const aspectRatio = 1.294

  useEffect(() => {
    if (!wrapperRef.current) return

    let lastWidth = 0
    let resizeTimeout: number | undefined
    let fadeTimeout: number | undefined

    const observer = new ResizeObserver(([entry]) => {
      const nextWidth = Math.round(entry.contentRect.width)

      if (Math.abs(nextWidth - lastWidth) >= 2) {
        setVisible(false)
        clearTimeout(resizeTimeout)
        clearTimeout(fadeTimeout)

        resizeTimeout = window.setTimeout(() => {
          lastWidth = nextWidth
          setWidth(nextWidth)
          setPredictedHeight(Math.round(nextWidth * aspectRatio))

          fadeTimeout = window.setTimeout(() => {
            setVisible(true)
          }, 300)
        }, 50)
      }
    })

    observer.observe(wrapperRef.current)

    return () => {
      clearTimeout(resizeTimeout)
      clearTimeout(fadeTimeout)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!pageRef.current) return
      const measured = pageRef.current.offsetHeight
      if (measured && Math.abs(measured - (actualHeight ?? 0)) > 1) {
        setActualHeight(measured)
      }
    }, 100)
    return () => clearTimeout(timeout)
  }, [width, visible, actualHeight])

  const containerHeight = actualHeight ?? predictedHeight

  return (
    <div
      className="relative w-full h-full bg-white min-h-[50vh] overflow-hidden"
      ref={wrapperRef}
    >
      <div
        style={{
          height: containerHeight,
          transition: 'opacity 0.3s ease, height 0.3s ease',
          overflow: 'hidden',
        }}
        className={visible ? 'opacity-100' : 'opacity-0'}
      >
        <div ref={pageRef}>
          <Document file="/resume.pdf" loading="">
            {width && (
              <Page
                pageNumber={1}
                width={width}
                renderAnnotationLayer
                renderTextLayer
              />
            )}
          </Document>
        </div>
      </div>
    </div>
  )
}
