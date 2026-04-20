import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import useReveal from "@/hooks/useReveal";

export default function Layout({ children, screenLabel }) {
  useReveal();
  return (
    <div data-screen-label={screenLabel}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
