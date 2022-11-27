import { Logo } from '../atoms/Logo';
import Navbar from '../widgets/Navbar';

export default function ClientHome() {
  return (
    <main className='relative z-[1] h-full flex flex-col items-center justify-center  overflow-x-scroll overflow-y-scroll'>
      <Logo />
    </main>
  );
}
