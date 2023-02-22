import Navbar from '../widgets/Navbar';
import BaseLayout from './BaseLayout';

export default function BuildingLayout({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <BaseLayout>
      <>
        <Navbar />
        <main className='lg:items-center flex lg:content-center my-auto overflow-x-hidden lg:overflow-x-scroll min-h-[calc(100vh-6rem)]'>
          {children}
        </main>
      </>
    </BaseLayout>
  );
}
