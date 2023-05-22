"use client";
import { ResponsiveCarousel } from "~/components/widgets/ResponsiveCarousel";
import Layout from "~/pages/PageLayout";
import lumina_home from "~/assets/home/lumina_home.png";
import adra_home from "~/assets/home/adra_home.png";
import piscinavarandasatualizadas from "~/assets/home/piscinavarandasatualizadas.jpg";
import bombinhas1 from "~/assets/home/bombinhas-1.jpg";
export default function Home() {
  return (
    <Layout>
      <ResponsiveCarousel
        hasText
        className="h-[calc(100vh-6rem)] transition-all duration-750 ease-in-out"
        images={[
          {
            src: lumina_home,
            alt: "test",
            title: "Lumina",
            text: "Sua vida no lugar que ela merece.",
          },
          {
            src: adra_home,
            alt: "test",
            title: "Aden",
            text: `Conheça e se encante. \nNo centro de Bombinhas - SC.`,
          },
          {
            src: piscinavarandasatualizadas,
            alt: "test",
            title: "Varandas do Atlântico",
            text: "Um empreendimento marcante e único.",
          },
          {
            src: bombinhas1,
            alt: "test",
            title: "Bombinhas É UM PARAÍSO",
            text: "A Capital do Mergulho Ecológico. \nCosta Verde & Mar de Santa Catarina.",
          },
        ]}
      />
    </Layout>
  );
}
