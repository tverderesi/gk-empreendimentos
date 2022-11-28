import Navbar from '../widgets/Navbar';
import { BaseLayout } from './BaseLayout';

export function PageLayout({
  children,
  population,
}: {
  children: JSX.Element;
  population: any;
}) {
  return (
    <BaseLayout>
      <>
        <Navbar population={population} />
        <main
          className='lg:items-center flex lg:content-center my-auto overflow-x-hidden lg:overflow-x-scroll '
          style={{ height: 'calc(100vh - 90px)' }}
        >
          {children}
        </main>
      </>
    </BaseLayout>
  );
}
