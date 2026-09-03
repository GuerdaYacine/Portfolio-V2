import { useState } from 'react'
import './ImageSlider.css'
import { IconArrowLeft, IconArrowRight } from './icons'

type ImageSliderProps = {
  images: string[]
  alt: string
}

export function ImageSlider({ images, alt }: ImageSliderProps) {
  const [index, setIndex] = useState(0)

  if (images.length === 0) {
    return (
      <div className="image-slider image-slider--empty">
        <p className="meta">Preview coming soon</p>
      </div>
    )
  }

  const hasMultiple = images.length > 1

  return (
    <div className="image-slider">
      <img src={images[index]} alt={`${alt} - image ${index + 1}`} />

      {hasMultiple && (
        <>
          <button
            type="button"
            className="image-slider__arrow image-slider__arrow--prev"
            onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
            aria-label="Previous image"
          >
            <IconArrowLeft />
          </button>
          <button
            type="button"
            className="image-slider__arrow image-slider__arrow--next"
            onClick={() => setIndex((i) => (i + 1) % images.length)}
            aria-label="Next image"
          >
            <IconArrowRight />
          </button>

          <div className="image-slider__dots">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                className={
                  i === index
                    ? 'image-slider__dot image-slider__dot--active'
                    : 'image-slider__dot'
                }
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
