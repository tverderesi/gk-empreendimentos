import { useEffect, useState } from 'react';
export function Dropdown({
  type,
  children,
}: {
  type: string;
  children: JSX.Element;
}) {
  const [open, setOpen] = useState(false);
  const openState = () => {
    return open ? '' : 'hidden';
  };

  useEffect(() => {}, [open]);

  return (
    <div
      className={`dropdown dropdown-${type} duration-1000 `}
      onClick={() => {
        setOpen(!open);
      }}
      onBlur={() => {
        setOpen(false);
      }}
    >
      <label
        tabIndex={0}
        className='btn btn-ghost lg:hidden'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 transition-all duration-1000'
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
        className={` menu w-[100vw] ml-4 mr-[-.5rem] mt-4  dropdown-content bg-[#1a1a1acc] backdrop-blur-xl ${openState()} bg-blend-overlay flex flex-col justify-center relative z-10`}
        style={{ height: 'calc(100vh - 85px)' }}
        onBlur={() => {
          setOpen(false);
        }}
        onClick={() => {
          setOpen(false);
        }}
      >
        {children}
      </ul>
    </div>
  );
}
