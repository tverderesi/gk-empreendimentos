import { LogoLetters } from '../atoms/LogoLettering';
import { Dropdown } from './Dropdown';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function Navbar() {
  const { population } = useContext(AppContext);
  const homeLink = '/tabelas';
  return (
    <header className='navbar bg-cadetblue-400 dark:bg-[#1a1a1a]/80 backdrop-blur-xl py-[1rem] sticky w-full top-0 z-10'>
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
                  <Link
                    to={`/${item.link}`}
                    className='btn btn-ghost text-lg h-full py-2 px-2 rounded-xl text-white tracking-wider font-medium min-w-max'
                  >
                    {item.title}
                  </Link>
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
                  <Link
                    className='btn btn-ghost text-xl h-full py-10 px-4 rounded-xl text-white tracking-wider font-normal mr-2 ml-2'
                    to={`/${item.link}`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </>
        </Dropdown>
      </div>
    </header>
  );
}
