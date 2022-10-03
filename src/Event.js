import React from "react";
import Birthday from "./assets/Birthday_cake.png";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
function Event() {
    const host = localStorage.getItem('Host Name');
    const start = localStorage.getItem('Start Date');
    const end = localStorage.getItem('End Date');
    const loc = localStorage.getItem('Location');
    const img = localStorage.getItem('fileBase64');
    const name = localStorage.getItem('Event Name');
    console.log(img)
  return (
    <div className="bg-[#dddddd] h-[100vh] w-[100vw] flex items-center justify-around">
      <div className="flex flex-col h-[50vh]">
        <div className="text-6xl font-helvetica font-extrabold">
          {name}
        </div>
        <div className="font-helvetica font-normal text-[#828282]">
          Hosted by <span className="text-gray-700 font-bold">{host}</span>
        </div>
        <div className="flex py-6 gap-x-3">
          <div className="bg-white p-4 rounded-lg text-center">
            <FaRegCalendarAlt className="text-purple-500" />
          </div>
          <div className="font-helvetica font-extrabold">
           {start}  <br /> <span className="font-light">to</span> {end} <span className="font-light">1:00PM UTC +10</span>
          </div>
        </div>
        <div className="flex gap-x-3">
          <div className="bg-white p-4 rounded-lg text-center">
            <HiOutlineLocationMarker className="text-purple-500" />
          </div>
          <p className="font-helvetica">
           <span style={{fontWeight:"bold"}}>Street name</span>  <br /> <span style={{fontWeight:"normal"}}> {loc}</span>
          </p>
        </div>
      </div>
      <div>
        <img width={500} src={img}></img>
      </div>
    </div>
  );
}

export default Event;
