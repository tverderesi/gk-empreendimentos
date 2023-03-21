import Grid from "../components/widgets/Grid";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { GridItem } from "../components/widgets/GridItem";
export default function Home() {
  const { population } = useContext(AppContext);
  return (
    <main
      className={`mt-24 flex justify-center items-start w-screen  h-[calc(100vh-6rem)]  mx-auto transition-all`}
    >
      <Grid>
        {population.map((item: any) => {
          return (
            <GridItem
              name={item.title}
              link={item.link}
              imageURL={item.image}
              logoURL={item.logo}
              key={item.title}
            />
          );
        })}
        <GridItem name={"Imóveis de Terceiros"} link={"terceiros"} />
        <GridItem name={"Folders e Tabelas"} link={"tabelas"} />
      </Grid>
    </main>
  );
}
