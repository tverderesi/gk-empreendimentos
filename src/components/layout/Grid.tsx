export default function Grid() {
  return (
    <div className='flex flex-col lg:flex-row mt-[150px] items-center lg:justify-center self-center justify-self-center relative z-[3] gap-y-5 my-auto lg:p-10 lg:gap-10 mx-auto min-w-screen min-h-screen'>
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
    </div>
  );
}
function GridItem() {
  return (
    <div className=' w-full h-full min-h-[20rem] min-w-[20rem] lg:h-96 lg:w-96 bg-cadetblue-600/50 flex items-center text-5xl text-primary-content justify-center rounded-xl drop-shadow-xl backdrop-blur-xl'>
      Zero
    </div>
  );
}
