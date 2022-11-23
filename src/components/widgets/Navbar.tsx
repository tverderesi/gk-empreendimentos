import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Logo } from '../atoms/Logo';

export function ListItems({ children }: any) {
  return (
    <ul
      className='menu w-[100vw] ml-4 mr-[-.5rem] mt-4  dropdown-content bg-[#1a1a1acc] backdrop-blur-xl  bg-blend-overlay flex flex-col justify-center'
      style={{ height: 'calc(100vh - 85px)' }}
    >
      {children}
    </ul>
  );
}
export function Dropdown({
  type,
  children,
}: {
  type: string;
  children: JSX.Element;
}) {
  return (
    <div className={`dropdown dropdown-${type} dropdown-bottom`}>
      <label
        tabIndex={0}
        className='btn btn-ghost lg:hidden'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h8m-8 6h16'
          />
        </svg>
      </label>
      {children}
    </div>
  );
}

export default function Navbar() {
  const { menuItems, menuLinks } = useContext(AppContext);
  return (
    <div className='navbar bg-[#1a1a1a] py-[1rem] sticky z-10'>
      <div className='navbar-start'>
        <a
          className='btn btn-ghost normal-case h-full p-2 ml-4'
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
                    className='btn btn-ghost text-xl h-full py-2 px-10 rounded-xl text-white tracking-wider font-medium'
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
          <ListItems>
            <>
              {menuItems.map((item: string) => {
                return (
                  <li>
                    <a className='btn btn-ghost text-xl h-full py-10 px-4 rounded-xl text-white tracking-wider font-normal mr-2 ml-2'>
                      {item}
                    </a>
                  </li>
                );
              })}
            </>
          </ListItems>
        </Dropdown>
      </div>
    </div>
  );
}
