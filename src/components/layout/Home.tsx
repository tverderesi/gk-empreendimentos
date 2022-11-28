import Navbar from '../widgets/Navbar';
import Grid from './Grid';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function Home() {
  const { population } = useContext(AppContext);
  return (
    <>
      <Navbar population={population} />
      <main
        className='relative z-[1] lg:mt-0 flex flex-col lg:items-center lg:justify-center  overflow-y-scroll  overflow-x-scroll'
        style={{
          height: 'calc(100%)',
          marginTop: 'calc(14vh)',
        }}
      >
        <Grid population={population} />
      </main>
    </>
  );
}
