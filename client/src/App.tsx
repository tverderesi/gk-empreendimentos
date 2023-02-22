import { AppProvider } from './context/AppContext';
import Root from './components/routes/Root';

function App() {
  return (
    <AppProvider>
      <Root />
    </AppProvider>
  );
}

export default App;
