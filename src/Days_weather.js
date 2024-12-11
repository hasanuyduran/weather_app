import React from "react";

const Days_weather = ({ icon, min, max, date }) => {
    switch (date) {
        case "Pazartesi":
            date = "Pzt";
            break;
        case "Salı":
            date = "Sal";
            break;
        case "Çarşamba":
            date = "Çar";
            break;
        case "Perşembe":
            date = "Per";
            break;
        case "Cuma":
            date = "Cum";
            break;
        case "Cumartesi":
            date = "Cmt";
            break;
        case "Pazar":
            date = "Paz";
            break;
        default:
            break;
    }
    return (
    <div>
      <div className="flex justify-center w-full">
      <h1 className="text-base">{`${min}|${max}`}</h1>
      </div>
      <div className="flex justify-center w-full">
        <img src={icon} alt="weather" className="w-2/5" />
      </div>
      <div className="flex justify-center w-full">
        <h1 className="text-xl ">{date}</h1>
      </div>
    </div>
  );
};

export default Days_weather;
