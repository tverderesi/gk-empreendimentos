import { ResponsiveCarousel } from "../components/widgets/ResponsiveCarousel";

export default function Home() {
  return (
    <ResponsiveCarousel
      className="h-[calc(100vh-22rem)] md:h-[calc(100vh-12rem)] transition-all duration-500 ease-in-out"
      images={[
        { src: "./pages/about/01-1024x576.jpg", alt: "test" },
        { src: "./pages/about/02-1024x576.jpg", alt: "test" },
        { src: "./pages/about/05-1024x576.jpg", alt: "test" },
      ]}
    />
  );
}
