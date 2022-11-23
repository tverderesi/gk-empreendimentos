export function BaseLayout({ children }: { children: JSX.Element }) {
  return (
    <div className='bg-[hsl(213,13%,14%)] h-[100vh] w-[100vw] absolute z-0'>
      {children}
    </div>
  );
}
