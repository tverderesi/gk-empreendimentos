import { Link } from 'react-router-dom';
import Logo from '../atoms/Logo';

export default function GridItem({
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
        className={`relative w-[92vw] ${
          imageURL ? 'h-[92vw]' : 'h-[46vw]'
        } p-3 lg:h-96 lg:w-96 bg-cadetblue-600 flex items-center py-5 text-primary-content justify-center rounded-xl drop-shadow-xl  text-center`}
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
