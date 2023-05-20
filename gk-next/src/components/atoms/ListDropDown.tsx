export const ListDropDown = ({ children }) => {
  return (
    <li tabIndex={0}>
      <a className="uppercase btn text-lg font-medium btn-ghost btn-ghost-primary tracking-wider rounded-2xl">
        {children[0]}
        <svg
          className="fill-current transition-all rotation"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </a>
      <ul className="p-2 bg-gradient-to-r from-[#1e2627fa] via-[#1d2223ff] to-[#1e2627fa] transition-all slide-in-top blur-edge min-w-full h-auto rounded-2xl justify-center backdrop-blur-3xl">
        {children.slice(1).map((child, idx) => {
          return <li key={`li${idx}`}>{child}</li>;
        })}
      </ul>
    </li>
  );
};
