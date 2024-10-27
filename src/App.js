import Services from "./components/Services";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import "./App.css";
import Products from "./components/Products";
import ImageBanner from "./components/ImageBanner";
import AboutUs from "./components/AboutUs";

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
    </>
  );
}

export default App;
