import Image from "next/image";
import { GKDivider } from "../atoms/GKDivider";
import useLeftScroll from "../hooks/useLeftScroll";
import { CarouselImage } from "~/Types";

export function ResponsiveCarousel({
  images,
  hasText = false,
  className = "",
  ...props
}: {
  images: CarouselImage[];
  hasText?: boolean;
  className?: string;
  [key: string]: any;
}) {
  const CarouselImageScroll = useLeftScroll(images);

  return (
    <div className={`carousel ${className}`} id="carousel" {...props}>
      {images.map(({ src, alt, title, text, link }, idx) => {
        return (
          <div
            id={`slide${idx + 1}`}
            className="carousel-item relative w-screen h-auto"
            key={`slide${idx + 1}`}
          >
            <Image
              src={src}
              className="w-full h-full object-cover "
              alt={alt}
              width={1705}
              height={909}
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
                  <p
                    className="text-white text-2xl md:text-4xl uppercase tracking-wide font-semibold text-center whitespace-break-spaces"
                    key={idx}
                  >
                    {text}
                  </p>
                  <a
                    className="btn btn-cadet-blue m-min-h-6 text-xl lg:w-1/4 lg:mx-auto justify-self-end mt-auto mb-12 px-3 py-2"
                    href={link ? link : "/404"}
                  >
                    Descubra
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <button
                className="btn btn-circle"
                onClick={(e) => {
                  CarouselImageScroll(idx, "left");
                }}
              >
                ❮
              </button>
              <button
                className="btn btn-circle"
                onClick={(e) => {
                  CarouselImageScroll(idx, "right");
                }}
              >
                ❯
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
