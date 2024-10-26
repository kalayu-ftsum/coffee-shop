import Header from "./components/Header";
import CoffeeBgTop from "./assets/coffee_withcup_photo.png";
import CoffeeBgBottom from "./assets/coffee_withcup.png";
import CoffeeOne from "./assets/1.png";
import CoffeeTwo from "./assets/2.png";
import CoffeeThree from "./assets/3.png";
import { ReactComponent as Bean } from "./assets/Bean.svg";
import CoffeeBanner from './assets/coffee_banner.png'
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-background px-36 h-screen relative">
        <Header />
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
        <div className="text-white pt-10 absolute top-1/2 left-[135px] transform -translate-y-1/2">
          <div className="mb-14">
            <h1 className="font-butler font-bold leading-none text-[12rem] mb-4 mr-32">
              Enjoy Your Life With Coffee
            </h1>
            <p className="font-butler font-normal text-2xl w-[607px]">
              Boost your productivity and build your mood with a short break in
              the most comfortable place. Boost your productivity and build your
              mood with a short.
            </p>
          </div>
          <button className="font-butler font-bold text-2xl px-8 py-4 rounded-lg bg-primary text-white">
            Explore more
          </button>
        </div>
      </div>

      <div className="h-[100px] bg-primary flex px-8 items-center gap-x-12">
        <Bean width={90} height={90} />
        <p className="text-5xl text-white font-butler font-normal ">
          Cappuccino
        </p>

        <Bean width={90} height={90} />
        <p className="text-5xl text-white font-butler font-normal ">Expresso</p>

        <Bean width={90} height={90} />
        <p className="text-5xl text-white font-butler font-normal ">Moca</p>

        <Bean width={90} height={90} />
        <p className="text-5xl text-white font-butler font-normal ">Latte</p>

        <Bean width={90} height={90} />
        <p className="text-5xl text-white font-butler font-normal ">
          Americano
        </p>

        <Bean width={90} height={90} />
      </div>

      <div className="relative mt-48">
      <img
          src={CoffeeBanner}
          alt="bg coffee"
          className="absolute -top-16 left-0  w-[29%] object-cover z-0"
        />
        <h1 className="text-9xl text-background font-butler font-bold text-center">
          We Provide
          <p className="text-8xl">Quality coffee to deliver</p>
        </h1>
        <p className="my-4 mx-auto text-2xl text-secondary font-butler font-normal text-center  w-5/12">
          Boost your productivity and build your mood with a short break in the
          most comfortable place. Boost your productivity and build your mood
          with a short.
        </p>
        <div className="my-8">
        <div className="flex items-center gap-x-8 mx-auto w-fit ">
          <img
            src={CoffeeOne}
            alt="bg coffee 1"
            className=" w-[400px] h-[500px] object-cover rounded-3xl"
          />

          <img
            src={CoffeeTwo}
            alt="bg coffee 1"
            className=" w-[500px] h-[700px] object-cover rounded-3xl"
          />
          <img
            src={CoffeeThree}
            alt="bg coffee 3"
            className=" w-[400px] h-[500px] object-cover rounded-3xl"
          />
        </div>
       <div className="flex w-fit mx-auto gap-x-4 items-center my-6">
        <span className="rounded-full w-4 h-4 bg-primary"></span>
        <span className="rounded-full w-8 h-8 border-8 border-primary"></span>
        <span className="rounded-full w-4 h-4 bg-primary"></span>
       </div>
        </div>
      </div>
    </>
  );
}

export default App;
