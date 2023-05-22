import { BackgroundImage } from "../components/atoms/BackgroundImage";

export function NotFound({ className }: { className?: string }) {
  return (
    <div
      className={`${
        className ? className : ""
      } w-screen flex flex-col justify-center items-center min-h-[calc(100vh-6rem)]`}
    >
      <h1 className="text-9xl font-semibold text-cadet-blue-400 mb-8">404</h1>
      <p className="text-center mx-auto text-4xl  mb-8">
        Desculpe, esta página não existe!
      </p>
    </div>
  );
}
