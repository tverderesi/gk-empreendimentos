export function BaseLayout({ children }: { children: JSX.Element }) {
  return (
    <div className='bg-[hsl(213,13%,14%)] h-screen w-screen  overflow-x-scroll '>
      {children}
    </div>
  );
}
