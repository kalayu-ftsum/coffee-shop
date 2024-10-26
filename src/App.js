import Services from "./components/Services";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import "./App.css";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Hero />
      <Banner />
      <Services />
      <Banner />
      <Products />
    </>
  );
}

export default App;
