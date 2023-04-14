import { GKDivider } from "../atoms/GKDivider";

export function ResponsiveCarousel({
  images,
  className = "",
}: {
  images: { src: string; alt: string; title?: string; text?: string }[];
  className?: string;
}) {
  return (
    <div className={`carousel ${className}`}>
      {images.map(({ src, alt, title, text }, idx) => {
        const parts = text ? text.split("\n") : ""; // split the text into two parts
        return (
          <>
            <div
              id={`slide${idx + 1}`}
              className="carousel-item relative w-screen h-auto"
            >
              <img
                src={src}
                className="w-full h-full object-cover "
                alt={alt}
              />
              <div className=" h-full w-full absolute flex flex-col items-center justify-center bg-slate-900/25">
                <h1 className=" text-3xl md:text-5xl font-bold tracking-wider uppercase text-white mb-3 w-3/4 px-4 text-center">
                  {title}
                </h1>
                <GKDivider className="w-3/4 md:w-1/2 mx-auto" />
                <p className="text-white text-2xl md:text-4xl uppercase tracking-wide font-semibold mt-3 w-3/4 px-1 text-center ">
                  {parts
                    ? parts.map((part, index) => (
                        <>
                          {part}
                          {index < parts.length - 1 && <br />}
                        </>
                      ))
                    : ""}
                </p>
              </div>
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
