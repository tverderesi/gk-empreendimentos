import FloorGenerator from './FloorGenerator';

export default function Lollygagging({ param }: { param: any }) {
  const height = 150;
  const width = 225;

  return (
    <section>
      <div className='flex flex-col items-center justify-center relative z-[1] font-bold text-white'>
        <FloorGenerator
          floors={8}
          height={height}
          width={width}
        />
      </div>
    </section>
  );
}
