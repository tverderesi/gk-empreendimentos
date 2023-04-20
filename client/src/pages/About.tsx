import { GKDivider } from "../components/atoms/GKDivider";

export function About() {
  return (
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
          img="pages/about/01-1024x576.jpg"
          paragraphs={[
            ` Descendente da parceria com a MHG, a construtora GK é fruto de um
          sonho de dois Engenheiros que uniram seus conhecimentos para assim
          formarem seus projetos.`,
          ]}
        />
        <Paragraph
          reverse={true}
          img="pages/about/02-1024x576.jpg"
          paragraphs={[
            `Elegeram a Cidade de Bombinhas, a Capital do Mergulho, um dos
                  melhores lugares deste Brasil, com 25 praias, como palco para
                  suas obras.`,
          ]}
        />

        <Paragraph
          img="pages/about/05-1024x576.jpg"
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
          img="pages/about/06-1024x576.jpg"
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
  );
}

function Paragraph({
  img,
  paragraphs,
  reverse,
}: {
  img: string;
  paragraphs: string[];
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex justify-center   scroll-snap-center lg:mb-20 ${
        reverse ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
      }`}
    >
      <img
        src={img}
        alt=""
        className="lg:w-96 lg:h-96 object-cover lg:rounded-xl drop-shadow-md"
      />
      <div
        className={`w-full lg:w-1/2 text-justify items-center flex flex-col justify-center ${
          reverse ? "lg:mr-5" : "lg:ml-5"
        }`}
      >
        {paragraphs.map((paragraph, idx) => {
          return (
            <p
              className={`${
                idx === 0 ? "mt-6" : idx === paragraphs.length ? "mb-6" : ""
              } text-xl text-white font-light lg:text-2xl lg:ml-6 my-3 px-3 lg:my-0`}
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
