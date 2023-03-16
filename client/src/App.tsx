import { AppRouter } from "./components/routes/AppRouter";
import { AppProvider } from "./context/AppContext";
import "./app.css";
function App() {
  console.log(process.env.NODE_ENV);
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
