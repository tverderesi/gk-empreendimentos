export function InfoPanel({ children }) {
  return (
    <h3 className="my-2.5 md:mt-0 text-lg lg:text-xl text-cadetblue-300 uppercase font-semibold tracking-wider">
      {children[0]}
      <span className="block text-lg lg:text-xl text-white  font-medium tracking-wider capitalize">
        {children[1]}
      </span>
    </h3>
  );
}
