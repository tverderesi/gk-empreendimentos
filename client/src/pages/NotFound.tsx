import { BackgroundImage } from "../components/atoms/BackgroundImage";

export function NotFound() {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extralight text-cadet-blue-400 mb-8">404</h1>
      <p className="text-4xl font-light mb-8">
        Desculpe, esta página não existe!
      </p>
      <BackgroundImage className="left-0 absolute" />
    </div>
  );
}
