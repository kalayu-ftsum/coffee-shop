import Header from "./components/Header";
import CoffeeBgTop from "./assets/coffee_withcup_photo.png";
import CoffeeBgBottom from "./assets/coffee_withcup.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-background px-36 h-screen relative">
        <div className="absolute top-0 right-0 w-[950px] h-[30%]">
          <div
            className="relative z-1 ml-auto w-[95%] h-[90%] "
            style={{
              background:
                "linear-gradient(#1c0b04 0%, #1c0b04 53%, #1c0b04 100%)",
            }}
          >
            <img
              src={CoffeeBgTop}
              alt="bg coffee"
              className=" object-cover relative h-full w-full"
              style={{
                boxShadow: "rgb(28 11 4 / 20%) 0px 0px 15px 10px",
              }}
            />
          </div>
        </div>
        <img
          src={CoffeeBgBottom}
          alt="bg coffee"
          className="absolute bottom-0 right-0 w-[95%] h-[73%] object-cover z-0"
        />
        <Header />
        <div className="text-white pt-10 absolute top-1/2 left-[135px] transform -translate-y-1/2">
          <div className="mb-14">
            <h1 className="font-butler font-bold leading-tight text-[12rem] mb-6 mr-32">
              Enjoy Your Life With Coffee
            </h1>
            <p className="font-butler font-normal text-2xl w-[607px]">
              Boost your productivity and build your mood with a short break in
              the most comfortable place. Boost your productivity and build your
              mood with a short.
            </p>
          </div>
          <button className="font-butler font-bold text-lg px-8 py-4 rounded-lg bg-primary text-white">
            Explore more
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
