import Grid from "../components/widgets/Grid";
import { useContext } from "react";
import AppContext from "../context/AppContext";

export default function Home() {
  const { population } = useContext(AppContext);
  return (
    <main
      className={`mt-24 flex justify-center w-screen  h-[calc(100vh-6rem)]  mx-auto transition-all`}
    >
      <Grid population={population} />
    </main>
  );
}
