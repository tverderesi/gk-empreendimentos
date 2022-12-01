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
      <div className='flex flex-col items-center min-w-[100vw] justify-start min-h-[calc(100vh-6rem)] 0 lg:mt-10'>
        <section
          key='OverviewCard'
          className=' w-screen lg:w-[98vw] min-h-[calc(100vh-6rem)]  lg:min-h-0 lg:h-full p-2 lg:p-4 lg:rounded-xl lg:drop-shadow-2xl  bg-[#1a1a1a] z-[5] flex flex-col lg:flex-row items-center '
        >
          <div
            key='overviewCardImage'
            className='relative  w-[95vw] mt-[1.5rem] lg:mt-0 lg:w-[25vw] h-[30vh] lg:h-[42vh]  z-[2] rounded-xl flex flex-col align-center drop-shadow-xl outline outline-1 outline-slate-900'
          >
            <img
              src={`${item.image}`}
              alt={`${item.title}`}
              className='w-[95vw] lg:w-[25vw]  lg:h-[42vh] object-cover z-[1] absolute bottom-0 rounded-xl '
            />

            <div className='h-full relative z-[5]'>
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
            className='lg:ml-5 h-auto my-2 lg:my-0 lg:h-full w-full lg:w-1/4 items-center justify-center flex flex-col'
          >
            <div className='flex flex-col justify-between h-[31.5vh]'>
              <div>
                <p className=' text-md lg:text-xl my-2 text-cadetblue-300 uppercase font-normal tracking-wider'>
                  Previsão de Entrega
                </p>
                <p className='text-lg lg:text-xl text-white  font-medium tracking-wider'>
                  Outubro/2025
                </p>
              </div>

              <div>
                <p className='text-lg lg:text-xl  text-cadetblue-300 uppercase font-semibold tracking-wider'>
                  Endereço
                </p>
                <p className='text-lg lg:text-xl w-full text-white  font-medium tracking-wider my-2'>
                  Av. Leopoldo Zarling, 1890, Bombas, Bombinhas – SC
                </p>
              </div>
            </div>
          </div>
          <div className='divider mt-0 lg:divider-horizontal'></div>
          <div className='w-full lg:w-1/2 h-auto lg:h-full'>
            <div className='flex flex-col w-full px-2'>
              <div className=' w-full text-left  h-full font-normal text-lg lg:text-2xl uppercase tracking-wide  text-cadetblue-300'>
                Unidades
              </div>
              <div className='flex lg:ml-[-16px] lg:mt-4 h-full my-auto  items-center  text-medium tracking-wide'>
                <Icon />
                <div className='w-4/5 ml-3 flex flex-col justify-center h-full'>
                  <p className='text-green-500 text-md font-light lg:text-xl mt-2 lg:mt-4'>
                    <span className='lg:text-3xl font-black'>33%</span> Em
                    Negociação
                  </p>
                  <p className='text-green-500 text-md font-light lg:text-xl  lg:mb-4'>
                    <span className='lg:text-2xl font-black'>XX</span> Unidades
                  </p>
                  <p className='text-yellow-500 text-md font-light lg:text-xl mt-2 lg:mt-4'>
                    <span className='lg:text-3xl font-black'>33%</span> Em
                    Negociação
                  </p>
                  <p className='text-yellow-500 text-md font-light lg:text-xl lg:mb-4'>
                    <span className='lg:text-2xl font-black'>XX</span> Unidades
                  </p>
                  <p className='text-red-500 text-md font-light lg:text-xl mt-2 lg:mt-4'>
                    <span className='lg:text-3xl font-black'>33%</span>{' '}
                    Indisponíveis
                  </p>
                  <p className='text-red-500 text-md font-light lg:text-xl lg:mb-4'>
                    <span className='lg:text-2xl font-black'>XX</span> Unidades
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
