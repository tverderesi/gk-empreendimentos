import { ResponsiveCarousel } from "../components/widgets/ResponsiveCarousel";

export default function Home() {
  return (
    <ResponsiveCarousel
      hasText
      className="h-[calc(100vh-6rem)] transition-all duration-750 ease-in-out"
      images={[
        {
          src: "./pages/home/lumina_home.png",
          alt: "test",
          title: "Lumina",
          text: "Sua vida no lugar que ela merece.",
        },
        {
          src: "./pages/home/adra_home.png",
          alt: "test",
          title: "Aden",
          text: `Conheça e se encante. \nNo centro de Bombinhas - SC.`,
        },
        {
          src: "./pages/home/piscinavarandasatualizadas.jpg",
          alt: "test",
          title: "Varandas do Atlântico",
          text: "Um empreendimento marcante e único.",
        },
        {
          src: "./pages/home/bombinhas-1.jpg",
          alt: "test",
          title: "Bombinhas É UM PARAÍSO",
          text: "A Capital do Mergulho Ecológico. \nCosta Verde & Mar de Santa Catarina.",
        },
      ]}
    />
  );
}
