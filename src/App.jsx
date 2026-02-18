import { Routes, Route } from "react-router-dom";
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
import MarketPage from "./components/MarketPage";

function LandingPage() {
  return (
    <>
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
    </>
  );
}

export default function App() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Navbar />
      <main role="main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/market" element={<MarketPage />} />
        </Routes>
      </main>
    </div>
  );
}
