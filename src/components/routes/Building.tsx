import FloorGenerator from '../widgets/FloorGenerator';
import BuildingLayout from '../layout/BuildingLayout';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function Lollygagging({ param }: { param: any }) {
  const { population } = useContext(AppContext);

  const getItem = (population: any) => {
    for (let i = 0; i < population.length; i++) {
      if (population[i].link === param) {
        const item = population[i];
        return item;
      }
    }
  };

  const item = getItem(population);

  return (
    <BuildingLayout>
      <div className='flex flex-col items-center lg:justify-center relative h-screen font-bold text-white  lg:rounded-xl'>
        <section className=' lg:w-[40vw] relative flex flex-col align-center'>
          <div
            className='w-screen h-[20vh] absolute z-[1]'
            style={{ boxShadow: 'inset 0 0 5px #00000083' }}
          ></div>
          <img
            src={`${item.image}`}
            alt={`${item.title}`}
            className='object-cover w-screen lg:w-auto  h-[20vh] lg:h-full relative bottom-0  lg:drop-shadow-xl'
          />
          <div className='absolute bottom-0 bg-gradient-to-t from-slate-900/100 to-transparent'>
            <img
              src={`${item.logo}`}
              alt={`${item.title}`}
              className='object-cover w-[80%] mb-4 lg:mb-5 mx-auto'
            />
          </div>
        </section>
        <section
          className='text-xl text-center font-[300] uppercase w-screen z-[1] h-screen bg-[#1a1a1ae8]'
          style={{ boxShadow: '0px -4px 10px #2e2e2ead' }}
        >
          <div>
            <h5>Previsão de Entrega</h5>
            <div className='flex w-[100%] h-[50px] rounded-xl bg-white items-center content-center  text-[#1a1a1a] text-3xl font-bold '>
              <p className='w-full'>Outubro/2025</p>
            </div>
          </div>
        </section>
      </div>
    </BuildingLayout>
  );
}
