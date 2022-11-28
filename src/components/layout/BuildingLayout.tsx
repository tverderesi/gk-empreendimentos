import Navbar from '../widgets/Navbar';
import { BaseLayout } from './BaseLayout';

export function BuildingLayout({ children }: { children: JSX.Element }) {
  return (
    <BaseLayout>
      <>
        <Navbar />
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
