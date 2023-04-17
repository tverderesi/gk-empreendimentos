import { GKDivider } from "../components/atoms/GKDivider";

export function About() {
  return (
    <>
      <article className="min-h-full w-11/12 lg:w-3/4 text-center">
        <h1 className="text-4xl font-semilight text-primary uppercase my-20">
          sobre a GK
        </h1>
        <h2 className="text-white text-xl font-light uppercase mt-2 mb-10">
          um pouco da nossa história e porque escolhemos Bombinhas
        </h2>

        <GKDivider />

        <div className="container">
          <article className="mt-20 mb-10 w-full flex flex-wrap mx-auto justify-center">
            <div className="flex justify-center flex-wrap scroll-snap-center">
              <img
                src="pages/about/01-1024x576.jpg"
                alt=""
                className="lg:w-96 lg:h-96 object-cover rounded-xl drop-shadow-md"
              />
              <div className="w-full lg:w-1/2 text-justify items-center flex flex-col justify-center lg:ml-5">
                <p className=" text-2xl text-white font-light lg:ml-6 my-3">
                  Há quase duas décadas de experiência e um olhar apaixonado por
                  detalhes remontam a historia da GK Engenharia e
                  Empreendimentos.
                </p>
                <p className="text-2xl text-white font-light lg:ml-6 my-3">
                  Descendente da parceria com a MHG, a construtora GK é fruto de
                  um sonho de dois Engenheiros que uniram seus conhecimentos
                  para assim formarem seus projetos.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-center my-10 lg:flex-row">
              <div className="lg:w-1/2 text-justify items-center flex flex-col justify-center lg:mr-5">
                <p className=" text-2xl text-white font-light lg:mr-6 my-3">
                  Elegeram a Cidade de Bombinhas, a Capital do Mergulho, um dos
                  melhores lugares deste Brasil, com 25 praias, como palco para
                  suas obras.
                </p>
              </div>
              <img
                src="pages/about/02-1024x576.jpg"
                alt=""
                className="lg:w-96 lg:h-96 object-cover rounded-xl drop-shadow-md"
              />
            </div>
            <div className="flex justify-center my-10">
              <img
                src="pages/about/05-1024x576.jpg"
                alt=""
                className="w-96 h-96 object-cover rounded-xl drop-shadow-md"
              />
              <div className="w-1/2 text-justify items-center flex flex-col justify-center ml-5">
                <p className="text-2xl text-white font-light ml-6 my-3">
                  A GK eleva o conceito de viver com sofisticação e investir com
                  qualidade, afinal está cercada de belezas naturais por todos
                  os lados, e isso é mais que um convite á inspiração, é na
                  verdade um privilégio.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-10 mb-20">
              <div className="w-1/2 text-right items-center flex flex-col justify-center mr-5">
                <p className="text-2xl text-white font-light mr-6 my-3">
                  A GK empreendimentos é um exemplo de solidez e alto padrão
                  imobiliário no Litoral catarinense e se orgulha em ser
                  referencia do segmento da Construção Civil em Bombinhas por
                  todas as suas realizações e pelo conjunto de diferenciais que
                  envolvem os diversos setores da empresa, com a valorização das
                  pessoas e o constante incremento técnico e tecnológico.
                </p>
              </div>
              <img
                src="pages/about/06-1024x576.jpg"
                alt=""
                className="w-96 h-96 object-cover rounded-xl drop-shadow-md"
              />
            </div>
          </article>
        </div>
      </article>
    </>
  );
}

function SectionResponsiveAlternatingImages({
  images,
  paragraph,
  reverse = false,
}) {
  return (
    <section className="min-h-full w-11/12 lg:w-3/4 text-center">
      <></>
    </section>
  );
}
