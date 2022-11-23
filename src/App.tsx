import './App.css';
import { BackgroundImage } from './components/atoms/BackgroundImage';
import { BaseLayout } from './components/layout/BaseLayout';
import Navbar from './components/widgets/Navbar';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <BaseLayout>
        <>
          <Navbar />
          <BackgroundImage />
        </>
      </BaseLayout>
    </AppProvider>
  );
}

export default App;
