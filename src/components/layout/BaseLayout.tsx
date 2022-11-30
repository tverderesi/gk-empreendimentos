import { BackgroundImage } from '../atoms/BackgroundImage';

export default function BaseLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      {children}
      <BackgroundImage />
    </>
  );
}
