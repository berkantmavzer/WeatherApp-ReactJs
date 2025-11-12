import React from "react";
import {
  FaCloud,
  FaDroplet,
  FaMagnifyingGlassLocation,
  FaTemperatureHalf,
  FaWind,
} from "react-icons/fa6";
import { OrbitProgress } from "react-loading-indicators";

function ShowWeather({ weather, isLoading }) {
  if (!weather || !weather.main || !weather.sys || !weather.weather) {
    return (
      <div className="text-white flex justify-center items-center h-7/12 flex-col gap-10">
        <FaMagnifyingGlassLocation className="text-8xl" />
        <p>İstediğiniz şehrin hava durumunu öğrenmek için arama yapınız</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="text-white flex justify-center items-center h-8/12">
        <OrbitProgress
          variant="dotted"
          color="#ffffff"
          size="medium"
          text=""
          textColor=""
        />
      </div>
    );
  }

  return (
    <div className="text-white flex">
      <div className="flex flex-col w-8/12 m-auto gap-15">
        <div className="flex-1">
          <h2 className="text-center text-xl font-bold mb-7">
            CURRENT WEATHER
          </h2>
          <div className="flex justify-between items-center">
            <div>
              {" "}
              <span className="text-xl font-bold">{`${
                weather.name.includes("Province")
                  ? weather.name.replace("Province", " ")
                  : weather.name
              }, ${weather.sys.country}`}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold">{`${Math.round(
                weather.main.temp
              )}℃`}</span>
              <span className="text-[#ffffffa2] text-xs">
                {weather.weather[0].description}
              </span>
            </div>
            <div>
              <span>
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                  alt="weather"
                  className="w-full flex-1 bg-[#ffffff6a] rounded-full"
                />{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-center text-xl font-bold my-7">AIR CONDITIONS</h2>
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <span className="flex text-[#ffffffa2] gap-1 items-center">
                <FaTemperatureHalf /> <span>Hissedilen</span>
              </span>
              <div className="text-xl font-bold">{`${Math.round(
                weather.main.feels_like
              )} ℃`}</div>
            </div>
            <div className="flex flex-col items-center">
              <span className="flex text-[#ffffffa2] gap-1 items-center">
                <FaWind /> <span>Rüzgar Şiddeti</span>
              </span>
              <div className="text-xl font-bold">{`${Math.round(
                weather.wind.speed
              )} m/s`}</div>
            </div>
            <div className="flex flex-col items-center">
              <span className="flex text-[#ffffffa2] gap-1 items-center">
                <FaCloud /> <span>Bulut Oranı</span>
              </span>
              <div className="text-xl font-bold">{`${Math.round(
                weather.clouds.all
              )} %`}</div>
            </div>
            <div className="flex flex-col items-center">
              <span className="flex text-[#ffffffa2] gap-1 items-center">
                <FaDroplet /> <span>Nem Oranı</span>
              </span>
              <div className="text-xl font-bold">{`${Math.round(
                weather.main.humidity
              )}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowWeather;
