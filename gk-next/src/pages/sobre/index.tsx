import Image from "next/image";
import { GKDivider } from "~/components/atoms/GKDivider";
import PageLayout from "~/pages/PageLayout";
//@todo - generalize image imports
import bombinhas1 from "~/assets/about/01-1024x576.jpg";
import bombinhas2 from "~/assets/about/02-1024x576.jpg";
import bombinhas3 from "~/assets/about/03-1024x576.jpg";
import bombinhas4 from "~/assets/about/04-1024x576.jpg";

import { StaticImageData } from "next/image";
export default function About() {
  return (
    <PageLayout>
      <section className="w-full lg:w-3/4 text-center mx-auto mt-10 lg:mt-16">
        <h1 className="text-4xl font-semibold text-primary uppercase">
          sobre a GK
        </h1>
        <h2 className="text-white text-xl mt-5 uppercase mb-10 lg:mb-16 mx-auto px-3">
          um pouco da nossa história e porque escolhemos Bombinhas
        </h2>
        <GKDivider className="w-11/12 mx-auto " />

        <article className="mt-10 lg:mt-16 mb-5 w-full flex flex-col mx-auto justify-center">
          <Paragraph
            img={bombinhas1}
            paragraphs={[
              ` Descendente da parceria com a MHG, a construtora GK é fruto de um
          sonho de dois Engenheiros que uniram seus conhecimentos para assim
          formarem seus projetos.`,
            ]}
          />
          <Paragraph
            reverse={true}
            img={bombinhas2}
            paragraphs={[
              `Elegeram a Cidade de Bombinhas, a Capital do Mergulho, um dos
                  melhores lugares deste Brasil, com 25 praias, como palco para
                  suas obras.`,
            ]}
          />

          <Paragraph
            img={bombinhas3}
            paragraphs={[
              `
                  A GK eleva o conceito de viver com sofisticação e investir com
                  qualidade, afinal está cercada de belezas naturais por todos
                  os lados, e isso é mais que um convite á inspiração, é na
                  verdade um privilégio.`,
            ]}
          />

          <Paragraph
            reverse
            img={bombinhas4}
            paragraphs={[
              `  A GK empreendimentos é um exemplo de solidez e alto padrão
                  imobiliário no Litoral catarinense e se orgulha em ser
                  referencia do segmento da Construção Civil em Bombinhas por
                  todas as suas realizações e pelo conjunto de diferenciais que
                  envolvem os diversos setores da empresa, com a valorização das
                  pessoas e o constante incremento técnico e tecnológico.`,
            ]}
          />
        </article>
      </section>
    </PageLayout>
  );
}

function Paragraph({
  img,
  paragraphs,
  reverse,
}: {
  img: StaticImageData;
  paragraphs: string[];
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex justify-center  scroll-snap-center lg:mb-20 ${
        reverse ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
      }`}
    >
      <div className="w-screen  h-[calc(100vw/2.09)] lg:w-96 lg:h-96 drop-shadow-md">
        <Image src={img} alt="" className="lg:rounded-xl object-cover" fill />
      </div>
      <div
        className={`w-full lg:w-1/2 text-justify items-center flex flex-col justify-center lg:h-96  ${
          reverse ? "lg:mr-5" : "lg:ml-5"
        }`}
      >
        {paragraphs.map((paragraph, idx) => {
          return (
            <p
              className={`${
                idx === 0 ? "mt-6" : idx === paragraphs.length ? "mb-6" : ""
              } text-xl text-white font-light lg:text-2xl lg:ml-6 my-3 px-3 lg:my-0`}
              key={idx}
            >
              {paragraph}
            </p>
          );
        })}
        <p className="text-2xl text-white font-light lg:ml-6 my-3"></p>
      </div>
    </div>
  );
}
