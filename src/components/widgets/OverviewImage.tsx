export default function OverviewImage(item: any) {
  return (
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
  );
}
