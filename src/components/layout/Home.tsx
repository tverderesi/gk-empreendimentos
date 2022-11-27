import Navbar from '../widgets/Navbar';
import Grid from './Grid';

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className='relative z-[1] flex flex-col items-center justify-center  overflow-x-scroll overflow-y-scroll'
        style={{ height: 'calc(100% - 90px)' }}
      >
        <Grid />
      </main>
    </>
  );
}
