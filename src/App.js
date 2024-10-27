import Services from "./components/Services";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import "./App.css";
import Products from "./components/Products";
import ImageBanner from "./components/ImageBanner";
import AboutUs from "./components/AboutUs";
import Testimony from "./components/Testimony";
import FooterBanner from "./components/FooterBanner"
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <Banner />
      <Services />
      <Banner />
      <Products />
      <ImageBanner />
      <AboutUs />
      <Testimony />
      <FooterBanner />
      <Footer />
    </>
  );
}

export default App;
