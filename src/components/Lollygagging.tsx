import FloorGenerator from './FloorGenerator';

export default function Lollygagging({ param }: { param: any }) {
  const height = 150;
  const width = 225;

  return (
    <div>
      <div className='h-full w-screen flex flex-col items-center justify-center relative z-[0] font-bold text-white'>
        <FloorGenerator
          floors={8}
          height={height}
          width={width}
        />
      </div>
    </div>
  );
}
