import FloorGenerator from '../widgets/FloorGenerator';
import BuildingLayout from '../layout/BuildingLayout';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function Lollygagging({ param }: { param: any }) {
  const { population } = useContext(AppContext);

  for (let i = 0; i < population.length; i++) {
    if (population[i].link === param) {
      console.log(population[i]);
    }
  }

  return (
    <BuildingLayout>
      <section>
        <div className='flex flex-col items-center justify-center relative z-[1] font-bold text-white'></div>
      </section>
    </BuildingLayout>
  );
}
