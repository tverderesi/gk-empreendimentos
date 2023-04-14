import { Link } from "react-router-dom";
import { GKDivider } from "../atoms/GKDivider";

export function ResponsiveCarousel({
  images,
  className = "",
  hasText = false,
}: {
  images: {
    src: string;
    alt: string;
    title?: string;
    text?: string;
    link?: string;
  }[];
  className?: string;
  hasText?: boolean;
}) {
  return (
    <div className={`carousel ${className}`}>
      {images.map(({ src, alt, title, text, link }, idx) => {
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
              {hasText ? (
                <div className=" h-full w-full absolute flex flex-col items-center justify-center bg-slate-900/25">
                  <div className=" w-3/4 flex flex-col justify-end h-[45%] pb-3 md:w-1/2 px-4">
                    <h1 className="text-3xl md:text-7xl font-bold tracking-wider uppercase text-white text-center">
                      {title}
                    </h1>
                  </div>
                  <GKDivider className="h-1/10 w-3/4 md:w-1/2 mx-auto" />
                  <div className="h-[45%] pt-6 w-3/4 px-1 flex flex-col justify-start ">
                    <p className="text-white text-2xl md:text-4xl uppercase tracking-wide font-semibold text-center ">
                      {parts
                        ? parts.map((part, index) => (
                            <>
                              {part}
                              {index < parts.length - 1 && <br />}
                            </>
                          ))
                        : ""}
                    </p>
                    <Link
                      className="btn btn-cadet-blue m-min-h-6 text-xl w-1/4 mx-auto justify-self-end mt-auto mb-12"
                      to={link ? link : "/404"}
                    >
                      Descubra
                    </Link>
                  </div>
                </div>
              ) : (
                ""
              )}
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
