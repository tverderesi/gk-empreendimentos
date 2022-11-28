import { BackgroundImage } from '../atoms/BackgroundImage';

export function BaseLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      {children} <BackgroundImage />
    </>
  );
}
