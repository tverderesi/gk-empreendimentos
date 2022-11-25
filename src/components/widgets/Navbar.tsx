import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Logo } from '../atoms/Logo';
import { Dropdown } from './Dropdown';

export default function Navbar() {
  const { menuItems, menuLinks } = useContext(AppContext);
  return (
    <div className='navbar bg-cadetblue-400 dark:bg-[#1a1a1a]/80 py-[1rem] sticky z-10'>
      <div className='navbar-start min-w-[25%]'>
        <a
          className='btn btn-ghost normal-case h-full p-2 ml-3'
          href='/'
        >
          <Logo />
        </a>
      </div>
      <div className='navbar-center hidden lg:flex justify-center'>
        <ul className='menu menu-horizontal p-0 '>
          <>
            {menuItems.map((item: string, index: number) => {
              return (
                <li>
                  <a
                    href={`/${menuLinks[index]}`}
                    className='btn btn-ghost text-lg h-full py-2 px-2 rounded-xl text-white tracking-wider font-medium min-w-max'
                  >
                    {item}
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
            {menuItems.map((item: string, index: number) => {
              return (
                <li>
                  <a
                    className='btn btn-ghost text-xl h-full py-10 px-4 rounded-xl text-white tracking-wider font-normal mr-2 ml-2'
                    href={`/${menuLinks[index]}`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </>
        </Dropdown>
      </div>
    </div>
  );
}
