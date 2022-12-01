import FloorGenerator from '../widgets/FloorGenerator';
import BuildingLayout from '../layout/BuildingLayout';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Grid from '../widgets/Grid';
import Icon from '../widgets/BuildingOccupancy';

export default function GenericRoute({ param }: { param: any }) {
  const { population } = useContext(AppContext);

  const getItem = (population: any) => {
    for (let i = 0; i < population.length; i++) {
      if (population[i].link === param) {
        const item = population[i];
        console.log(item);
        return item;
      }
    }
  };

  const item = getItem(population);

  return item.building ? <Building item={item} /> : <p>Hello Worlde</p>;
}

export function Building({ item }: { item: any }) {
  return (
    <BuildingLayout>
      <div className='flex flex-col items-center min-w-[100vw] justify-start min-h-[calc(100vh-6rem)] mt-2 lg:mt-10'>
        <section
          key='OverviewCard'
          className=' w-[95vw] lg:w-[98vw] h-full p-2 lg:p-4 rounded-xl drop-shadow-2xl  bg-[#1a1a1a] z-[5] flex flex-col lg:flex-row items-center '
        >
          <div
            key='overviewCardImage'
            className=' relative w-full lg:w-[25%] rounded-xl flex flex-col align-center h-full'
          >
            <div className='w-auto h-auto relative z-[5]'>
              <img
                src={`${item.image}`}
                alt={`${item.title}`}
                className='object-cover  relative bottom-0 rounded-xl'
              />
              <div className='absolute bottom-0 w-[100%] bg-gradient-to-t from-slate-900/100 to-transparent rounded-[0.70rem] rounded-t-none'>
                <img
                  src={`${item.logo}`}
                  alt={`${item.title}`}
                  className='object-cover w-[80%] mb-4 lg:mb-5 mx-auto '
                />
              </div>
            </div>
          </div>
          <div
            key='generalInfo'
            className='lg:ml-10 w-full lg:w-1/4 items-center justify-center flex'
          >
            <div>
              <p className=' text-md lg:text-2xl text-cadetblue-300 uppercase font-normal tracking-wider'>
                Previsão de Entrega
              </p>
              <p className='text-lg lg:text-3xl mt-1 text-white uppercase font-semibold tracking-wider'>
                OUTUBRO/2025
              </p>
              <p className='text-lg lg:text-2xl mt-4 text-cadetblue-300 uppercase font-normal tracking-wider'>
                Endereço
              </p>
              <p className='text-lg lg:text-2xl mt-1 w-full text-white uppercase font-semibold tracking-wider'>
                Av. Leopoldo Zarling, 1890, Bombas, Bombinhas – SC
              </p>
            </div>
          </div>
          <div className='divider lg:divider-horizontal'></div>
          <div className='w-full lg:w-1/2 h-full'>
            <div className='flex flex-col w-full px-2'>
              <div className=' w-full text-left  h-full font-semibold text-lg lg:text-2xl uppercase tracking-wide  text-cadetblue-300'>
                Unidades
              </div>
              <div className='flex items-center'>
                <Icon />
                <div className='w-4/5 ml-3'>
                  <p className='text-green-500 text-md lg:text-xl'>
                    33% Disponíveis
                  </p>
                  <p className='text-yellow-500 text-md lg:text-xl'>
                    {' '}
                    33% Em Negociação
                  </p>
                  <p className='text-red-500 text-md lg:text-xl'>
                    {' '}
                    33% Indisponíveis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BuildingLayout>
  );
}
