import { BackgroundImage } from "../atoms/BackgroundImage";
import Logo from "../atoms/Logo";
import LogoLetters from "../atoms/LogoLettering";
import { Link } from "react-router-dom";

export function ClientHome() {
  const items = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Services",
      path: "/services",
      submenu: [
        {
          label: "Service 1",
          path: "/services/service-1",
        },
        {
          label: "Service 2",
          path: "/services/service-2",
        },
      ],
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  const tooltip = `Esse botão simula o endereço 'tabelas.gkempreendimentos.com' e não estará presente na versão final.`;
  return (
    <>
      <header>
        <GenericNavbar items={items} />
      </header>
      <main className="relative z-[1] flex flex-col items-center justify-center overflow-x-scroll overflow-y-scroll min-h-screen w-screen">
        {/* <div
          className="tooltip tooltip-bottom tooltip-accent relative top-10"
          data-tip={tooltip}
        >
          <Link className="btn btn-primary text-white" to={"tabelas"}>
            Navegar para Tabelas
          </Link>
        </div> */}
        <SobreSection />
      </main>
      <footer className="mx-auto w-screen py-6 bg-[#0c0c0c] ">
        <div>
          <div className="text-center md:text-left">
            <p className="text-sm">
              Av. Vereador Manoel José dos Santos, 1.310, Sala 14, Bombinhas -
              SC
              <span className="block sm:inline">
                E-mail: gkengenharia@gmail.com (47)3264-0018
              </span>
            </p>
          </div>
        </div>

        <BackgroundImage />
      </footer>
    </>
  );
}

function GenericNavbar({ items }) {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {items.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          daisyUI
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {items.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn" to="/get-started">
          Get started
        </Link>
      </div>
    </nav>
  );
}

function SobreSection() {
  return (
    <section className="min-h-full w-11/12 lg:w-1/2 text-center">
      <h1 className="text-4xl font-semilight text-primary uppercase my-20">
        sobre a GK
        <p className="text-white text-xl font-light uppercase mt-2 mb-10">
          um pouco da nossa história e porque escolhemos bombinhas
        </p>
      </h1>

      <div className="divider before:bg-white after:bg-white">
        <Logo className="h-8" />
      </div>

      <article className="mt-20 mb-10 w-full flex flex-wrap mx-auto justify-center">
        <div className="flex justify-center flex-wrap">
          <img
            src="pages/about/01-1024x576.jpg"
            alt=""
            className="lg:w-96 lg:h-96 object-cover rounded-xl drop-shadow-md"
          />
          <div className="w-full lg:w-1/2 text-justify items-center flex flex-col justify-center lg:ml-5">
            <p className=" text-2xl text-white font-light lg:ml-6 my-3">
              Há quase duas décadas de experiência e um olhar apaixonado por
              detalhes remontam a historia da GK Engenharia e Empreendimentos.
            </p>
            <p className="text-2xl text-white font-light lg:ml-6 my-3">
              Descendente da parceria com a MHG, a construtora GK é fruto de um
              sonho de dois Engenheiros que uniram seus conhecimentos para assim
              formarem seus projetos.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-center my-10 lg:flex-row">
          <div className="lg:w-1/2 text-justify items-center flex flex-col justify-center lg:mr-5">
            <p className=" text-2xl text-white font-light lg:mr-6 my-3">
              Elegeram a Cidade de Bombinhas, a Capital do Mergulho, um dos
              melhores lugares deste Brasil, com 25 praias, como palco para suas
              obras.
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
              qualidade, afinal está cercada de belezas naturais por todos os
              lados, e isso é mais que um convite á inspiração, é na verdade um
              privilégio.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10 mb-20">
          <div className="w-1/2 text-right items-center flex flex-col justify-center mr-5">
            <p className="text-2xl text-white font-light mr-6 my-3">
              A GK empreendimentos é um exemplo de solidez e alto padrão
              imobiliário no Litoral catarinense e se orgulha em ser referencia
              do segmento da Construção Civil em Bombinhas por todas as suas
              realizações e pelo conjunto de diferenciais que envolvem os
              diversos setores da empresa, com a valorização das pessoas e o
              constante incremento técnico e tecnológico.
            </p>
          </div>
          <img
            src="pages/about/06-1024x576.jpg"
            alt=""
            className="w-96 h-96 object-cover rounded-xl drop-shadow-md"
          />
        </div>
      </article>
    </section>
  );
}
