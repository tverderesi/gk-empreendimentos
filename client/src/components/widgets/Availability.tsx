export default function Availability({ availability }: { availability: any }) {
  const available = Math.round(
    (availability.available / availability.total) * 100
  );
  const unavailable = Math.round(
    (availability.unavailable / availability.total) * 100
  );
  const negotiation = Math.round(
    (availability.negotiation / availability.total) * 100
  );

  return (
    <div className="flex lg:ml-[-16px] lg:mt-4 h-full my-auto  items-center  text-medium tracking-wide">
      <div className="w-4/5 ml-3 flex flex-col justify-center h-full">
        <p className="text-green-500 text-md font-light lg:text-xl mt-2 lg:mt-4">
          <span className="lg:text-3xl font-black">{available}%</span> Em
          Negociação
        </p>
        <p className="text-green-500 text-md font-light lg:text-xl  lg:mb-4">
          <span className="lg:text-2xl font-black">
            {availability.available}
          </span>{" "}
          Unidades
        </p>
        <p className="text-yellow-500 text-md font-light lg:text-xl mt-2 lg:mt-4">
          <span className="lg:text-3xl font-black">{negotiation}%</span> Em
          Negociação
        </p>
        <p className="text-yellow-500 text-md font-light lg:text-xl lg:mb-4">
          <span className="lg:text-2xl font-black">
            {availability.negotiation}
          </span>{" "}
          Unidades
        </p>
        <p className="text-red-500 text-md font-light lg:text-xl mt-2 lg:mt-4">
          <span className="lg:text-3xl font-black">{unavailable}%</span>{" "}
          Indisponíveis
        </p>
        <p className="text-red-500 text-md font-light lg:text-xl lg:mb-4">
          <span className="lg:text-2xl font-black">
            {availability.unavailable}
          </span>{" "}
          Unidades
        </p>
      </div>
    </div>
  );
}
