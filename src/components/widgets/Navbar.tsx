import { LogoLetters } from '../atoms/LogoLettering';
import { Dropdown } from './Dropdown';
import { Link } from 'react-router-dom';

export default function Navbar({ population }: { population: any }) {
  const homeLink = '/tabelas';
  return (
    <header className='fixed w-full top-0 z-10 h-[13vh] '>
      <div className='navbar bg-cadetblue-400 dark:bg-[#1a1a1a]/80 backdrop-blur-xl py-[1rem]'>
        <div className='navbar-start min-w-[25%]'>
          <Link
            to={homeLink}
            className='btn btn-ghost normal-case h-full p-2 ml-3'
          >
            <LogoLetters />
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex justify-center'>
          <ul className='menu menu-horizontal p-0 '>
            <>
              {population.map((item: any) => {
                return (
                  <li>
                    <a
                      href={`/${item.buildingLink}`}
                      className='btn btn-ghost text-lg h-full py-2 px-2 rounded-xl text-white tracking-wider font-medium min-w-max'
                    >
                      {item.buildingName}
                    </a>
                  </li>
                );
              })}
            </>
          </ul>
        </div>
        <div className='navbar-end'>
          <Dropdown type='end'>
            <>
              <li>
                <a
                  href={`/`}
                  className='btn btn-ghost text-xl h-full py-10 px-4 rounded-xl text-white tracking-wider font-normal mr-2 ml-2'
                >
                  Home
                </a>
              </li>
              {population.map((item: any) => {
                return (
                  <li>
                    <a
                      className='btn btn-ghost text-xl h-full py-10 px-4 rounded-xl text-white tracking-wider font-normal mr-2 ml-2'
                      href={`/${item.buildingLink}`}
                    >
                      {item.buildingName}
                    </a>
                  </li>
                );
              })}
            </>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}