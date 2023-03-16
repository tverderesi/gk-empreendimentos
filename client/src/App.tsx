import { AppRouter } from "./components/routes/AppRouter";
import { AppProvider } from "./context/AppContext";
import "./app.css";
function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
