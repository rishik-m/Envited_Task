import React from "react";

import { useNavigate } from "react-router-dom";
function getCalInputFormat(date) {
  var mm = date.getMonth() + 1;
  var dd = date.getDate();

  return [
    date.getFullYear(),
    (mm > 9 ? "" : "0") + mm,
    (dd > 9 ? "" : "0") + dd,
  ].join("-");
}
const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));
let numCounter = 0;

function Form() {
  const [imagePreviewUrl, setImagePreviewURL] = React.useState(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII="
  );
  const navigate = useNavigate();
  const toEvent = () => {
    navigate("/event");
  };
  const ImgUpload = ({ onChange, src }) => (
    <div>
      <img
        id="firebase"
        height={100}
        width={100}
        className="p-4"
        src={src}
        alt="sometext"
      />
      <div className="flex gap-2">
        <div className="file flex flex-col file--uploading font-poppins">
          <label className="font-poppins" htmlFor="input-file">
            Choose image
          </label>
          <input id="input-file" type="file" onChange={onChange} />
        </div>
      </div>
    </div>
  );
  const [name, setName] = React.useState();
  const [start, setStart] = React.useState();
  const [end, setEnd] = React.useState();
  const [location, setLocation] = React.useState();
  const [host, setHost] = React.useState();
  const [img, setImg] = React.useState();
  const set = () => {
    localStorage.setItem("Event Name", name);
    localStorage.setItem("Start Date", start);
    localStorage.setItem("End Date", end);
    localStorage.setItem("Location", location);
    if (imagePreviewUrl) {
      localStorage.setItem("Image", imagePreviewUrl);
    }

    localStorage.setItem("Host Name", host);
  };
  const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
       const reader = new FileReader();
       reader.onload = () => resolve(reader.result);
       reader.onerror = error => reject(error);
       reader.readAsDataURL(file);
    });
}
  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    getBase64(file).then(base64 => {
        localStorage["fileBase64"] = base64;
        console.debug("file stored",base64);
      });
  };

  return (
    <div className="lg:ml-10 flex flex-col font-['Poppins'] py-8">
      <div>
        <h1 className="lg:pl-5 font-poppins text-[48px] font-[700]">
          List Your Event with Ease
        </h1>
        <p className="lg:w-2/5 mt-10 lg:pl-5 font-poppins text-[16px] text-[#B4B5C9]">
          At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
          cursus vestibulum, facilisi ac, sed faucibus.
        </p>
      </div>
      <form
        className="ml-5 flex flex-col items-start"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="my-5 flex flex-col sm:w-1/2 w-2/5 items-start border-b border-gray-700 py-2 relative">
          <span className="">Event Name</span>
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 leading-tight focus:outline-none"
            type="text"
            placeholder="Title of the event"
            aria-label="Title"
            onChange={(e) => setName(e.target.value)}
          />
          <span className="text-red-500 absolute text-2xl right-0">*</span>
        </div>
        <div className="my-5 flex flex-col sm:w-1/2 w-2/5 items-start border-b border-gray-700 py-2 relative">
          <span className="">Event banner image</span>
          <ImgUpload onChange={photoUpload} src={imagePreviewUrl} />
          <span className="text-red-500 absolute text-2xl right-0">*</span>
        </div>

        <div className="my-5 flex flex-col sm:w-1/2 w-2/5 items-start border-b border-gray-700 py-2 relative">
          <span className="">Event Start Date</span>
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 leading-tight focus:outline-none"
            type="date"
            placeholder="Event Start Date"
            aria-label="Event Start Date"
            min={getCalInputFormat(tomorrow)}
            onChange={(e) => setStart(e.target.value)}
          />
          <span className="text-red-500 absolute text-2xl right-0">*</span>
        </div>
        <div className="my-5 flex flex-col sm:w-1/2 w-2/5 items-start border-b border-gray-700 py-2 relative">
          <span className="">Event End Date</span>
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 leading-tight focus:outline-none"
            type="date"
            placeholder="Event End Date"
            aria-label="Event End Date"
            min={getCalInputFormat(tomorrow)}
            onChange={(e) => setEnd(e.target.value)}
          />
          <span className="text-red-500 absolute text-2xl right-0">*</span>
        </div>
        <div className="my-5 flex flex-col sm:w-1/2 w-2/5 items-start border-b border-gray-700 py-2 relative">
          <span className="">Event Location</span>
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 leading-tight focus:outline-none"
            type="text"
            placeholder="Event Location"
            aria-label="Event Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <span className="text-red-500 absolute text-2xl right-0">*</span>
        </div>

        <div className="my-5 flex flex-col sm:w-1/2 w-2/5 items-start border-b border-gray-700 py-2 relative">
          <span className="">Host Name</span>
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 leading-tight focus:outline-none"
            type="text"
            placeholder="Organizer Name"
            aria-label="Organizer Name"
            onChange={(e) => setHost(e.target.value)}
          />
          <span className="text-red-500 absolute text-2xl right-0">*</span>
        </div>

        <div className="px-8 py-3 bg-purple-600 text-white font-helvetica rounded-xl ">
          <button
            onClick={() => {
              set();
              toEvent();
            }}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
