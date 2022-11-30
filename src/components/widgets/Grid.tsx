import GridItem from './GridItem';

export default function Grid({ population }: { population: any }) {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-start lg:justify-center mx-auto py-5  lg:mt-0 relative z-[3] gap-y-5  lg:p-10 lg:gap-10'>
      {population.map((item: any, idx: number) => {
        return (
          <GridItem
            name={item.title}
            link={item.link}
            imageURL={item.image}
            logoURL={item.logo}
          />
        );
      })}
    </div>
  );
}
