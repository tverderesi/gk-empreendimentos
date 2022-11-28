import { Link } from 'react-router-dom';
import Logo from '../atoms/Logo';

export default function Grid({ population }: { population: any }) {
  return (
    <div className='flex flex-col lg:flex-row items-center mt-5 mb-10 px-3 lg:justify-center relative z-[3] gap-y-5 lg:mt-0 lg:p-10 lg:gap-10 mx-auto min-w-screen'>
      {population.map((item: any) => {
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
function GridItem({
  name,
  link,
  imageURL = '',
  logoURL = '',
}: {
  name: any;
  link: any;
  imageURL?: any;
  logoURL?: any;
}) {
  return (
    <Link to={`/${link}`}>
      <div
        className={`relative w-80 ${
          imageURL ? 'h-80' : 'h-36'
        } p-3 lg:h-96 lg:w-96 bg-cadetblue-600 flex items-center  text-primary-content justify-center rounded-xl drop-shadow-xl  text-center`}
      >
        {imageURL ? (
          <div className='absolute top-0   w-full h-full '>
            <img
              src={imageURL}
              alt={name}
              className='p-0 absolute  w-full h-full justify-self-center self-center object-cover   rounded-xl drop-shadow-xl'
            />
            <div className='pt-2 absolute bottom-0  bg-slate-900/50 rounded-xl rounded-t-none'>
              <img
                src={logoURL}
                alt={name}
                className='w-4/5 mx-auto mb-5 '
              />
            </div>
          </div>
        ) : (
          <>
            <p className='z-[1] absolute  uppercase text-3xl lg:text-5xl tracking-wider lg:leading-relaxed font-semibold px-5'>
              {name}
            </p>
            <Logo
              shadow={true}
              className='z-[0] h-[90%] lg:h-auto lg:w-[70%] opacity-10 relative'
            />
          </>
        )}
      </div>
    </Link>
  );
}
