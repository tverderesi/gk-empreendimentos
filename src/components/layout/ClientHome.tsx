import { LogoLetters } from '../atoms/LogoLettering';
import { Link } from 'react-router-dom';

export default function ClientHome() {
  const tooltip = `Esse botão simula o endereço 'tabelas.gkempreendimentos.com' e não estará presente na versão final.`;
  return (
    <main className='relative z-[1] h-full flex flex-col items-center justify-center overflow-x-scroll overflow-y-scroll'>
      <LogoLetters />
      <div
        className='tooltip tooltip-bottom tooltip-accent relative top-10'
        data-tip={tooltip}
      >
        <Link
          className='btn btn-primary text-white'
          to={'tabelas'}
        >
          Navegar para Tabelas
        </Link>
      </div>
    </main>
  );
}
