import Navbar from '../widgets/Navbar';

export function PageLayout({
  children,
  population,
}: {
  children: JSX.Element;
  population: any;
}) {
  return (
    <>
      <Navbar />
      <main className='lg:items-center flex lg:content-center my-auto overflow-x-hidden lg:overflow-x-scroll'>
        {children}
      </main>
    </>
  );
}
