import './App.css';
import { BackgroundImage } from './components/atoms/BackgroundImage';
import { BaseLayout } from './components/layout/BaseLayout';
import Grid from './components/layout/Grid';
import Navbar from './components/widgets/Navbar';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <BaseLayout>
        <>
          <header>
            <Navbar />
          </header>
          <main
            className='relative z-[1] flex flex-col items-center justify-center  overflow-x-scroll overflow-y-scroll'
            style={{ height: 'calc(100% - 90px)' }}
          >
            <Grid />
          </main>
          <BackgroundImage />
        </>
      </BaseLayout>
    </AppProvider>
  );
}

export default App;
