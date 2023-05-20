import { Footer } from "~/components/widgets/Footer";
import { Navbar } from "~/components/widgets/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {children} <Footer />
      </main>
    </>
  );
}
