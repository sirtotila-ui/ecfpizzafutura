import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Storia from "./components/Storia";
import ChiSiamo from "./components/ChiSiamo";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Specialita from "./components/Specialita";
import Come from "./components/Come";
import Asporto from "./components/Asporto";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Navbar />
      <main role="main">
        <Hero />
        <Storia />
        <ChiSiamo />
        <Menu />
        <Testimonials />
        <Specialita />
        <Come />
        <Asporto />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
