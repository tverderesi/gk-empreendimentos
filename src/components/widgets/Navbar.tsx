import LogoLetters from '../atoms/LogoLettering';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { population } = useContext(AppContext);

  const homeLink = '/tabelas';

  const [open, setOpen] = useState(false);

  const [location, setLocation] = useState(window.location.pathname);

  useEffect(() => {
    setLocation(window.location.pathname);
  }, [open, location]);

  const openState = () => {
    return open ? '' : 'hidden';
  };

  return (
    <header className='navbar bg-cadetblue-400 dark:bg-[#1a1a1a]/80 backdrop-blur-xl py-[1rem] sticky w-full top-0 z-10 h-24'>
      <div className='navbar-start min-w-[25%]'>
        <NavLink
          to={homeLink}
          className='btn btn-ghost normal-case h-full p-2 ml-3'
        >
          <LogoLetters />
        </NavLink>
      </div>
      <div className='navbar-center hidden lg:flex justify-center'>
        <ul className='menu menu-horizontal p-0 '>
          <>
            {population.map((item: any) => {
              return (
                <li>
                  <NavLink
                    to={`/${item.link}`}
                    className='btn btn-ghost text-lg h-full py-3 px-3 rounded-xl text-white tracking-wider font-medium min-w-max mx-2'
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </>
        </ul>
      </div>
      <div className='navbar-end'>
        <div className={`dropdown dropdown-end`}>
          <label
            tabIndex={0}
            className='btn btn-ghost lg:hidden'
            onClick={() => {
              setOpen(!open);
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 transition-all'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={open ? 'M4,4 L20,20 M4,20 L20,4' : 'M4 6h16M4 12h8m-8 6h16'}
              />
            </svg>
          </label>
          <ul
            className={` menu w-[100vw] ml-4 mr-[-.5rem] mt-4 ${openState()} dropdown-content bg-[#1a1a1af1] backdrop-blur-xl  bg-blend-overlay flex flex-col justify-center relative z-10`}
            style={{ height: 'calc(100vh - 85px)' }}
            onBlur={() => {
              setOpen(false);
            }}
          >
            <li>
              <Link
                to={homeLink}
                className='btn btn-ghost text-xl h-full py-10 px-4 rounded-xl text-white tracking-wider font-normal mr-2 ml-2'
              >
                Home
              </Link>
            </li>
            {population.map((item: any) => {
              return (
                <li>
                  <Link
                    to={`/${item.link}`}
                    className='btn btn-ghost text-xl h-full py-10 px-4 rounded-xl text-white tracking-wider font-normal mr-2 ml-2'
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
