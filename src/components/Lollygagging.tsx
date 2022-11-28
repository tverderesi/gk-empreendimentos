export default function Lollygagging({ param }: { param: any }) {
  const height = 160;
  const width = 300;

  const floors = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      <div className='w-screen h-screen flex flex-col items-center justify-center relative z-[0] font-bold text-white'>
        {floors.map(floor => {
          return (
            <div>
              {' '}
              <div
                className={`flexitems-center bg-slate-900  btn-secondary justify-center absolute top-[500px] z-[${
                  floor * 10
                }] bg-cadetblue-300/[1%]`}
                style={{
                  height: `${height}px`,
                  width: `${width}px`,
                  border: '5px solid #ffffff',

                  transform: `matrix(0.707, 0.409, -0.707, 0.409, 100.5, -14.71) translateX(${
                    -40 * floor
                  }px) translateY(${-40 * floor}px)`,
                }}
              >
                {}
              </div>
              <div> Floor {8 - floor} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

//
//
//     >
//       TOP 2
//     </div>
// </div>
// <div className='flex relative z-[5]'>
//   {param}
//   <div className='self-center w-screen text-5xl font-black text-white'>
//     <div
//       className='flex items-center justify-center relative z-[6] '
//       style={{
//         height: '150px',
//         width: '300px',
//         border: '5px solid white',
//         transform: 'rotate3d(1, -0.6, 1, 60deg) ',
//       }}
//     >
//       TOP 1
//     </div>
//   </div>
// </div>
