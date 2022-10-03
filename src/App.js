import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Cards";
import Event from "./Event"


function App() {
  return (
    <div className="bg-[#dddddd] h-[100vh] w-[100vw] flex flex-col-reverse xl:flex-row items-center justify-around">
      
      <Card />
      <div className="">
        <div className="text-7xl text-center xl:text-right font-bold">
          Imagine if
          <br />
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8456ec] to-[#e87bf8]">
            Snapchat
          </span>{" "}
          <br /> had events.
        </div>
        <div className="text-center xl:text-right tracking-widest text-2xl text-[#4f4f4f] font-helvetica font-light">
          Easily host and share events with your
          <br /> friends across any social media.
        </div>
        <div className="flex py-3 bg-[#dddddd] items-center justify-end pt-8">
          <button className="text-white text-lg bg-gradient-to-r from-[#8456ec] to-[#e87bf8] px-20 py-4 rounded-xl">
          <a href="/create"> 🎉 Create my event</a> 
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
