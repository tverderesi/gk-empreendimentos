export function ResponsiveCarousel({
  images,
  className = "",
}: {
  images: { src: string; alt: string }[];
  className?: string;
}) {
  return (
    <div className={`carousel ${className}`}>
      {images.map(({ src, alt }, idx) => {
        console.log(images.length);
        return (
          <>
            <div
              id={`slide${idx + 1}`}
              className="carousel-item relative w-screen h-auto"
            >
              <img src={src} className="w-full h-full object-cover" alt={alt} />
              <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href={`#slide${idx === 0 ? images.length : idx}`}
                  className="btn btn-circle"
                >
                  ❮
                </a>
                <a
                  href={`#slide${idx + 1 === images.length ? 1 : idx + 2}`}
                  className="btn btn-circle"
                >
                  ❯
                </a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
