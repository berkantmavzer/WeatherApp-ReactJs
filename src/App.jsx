import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ShowWeather from "./components/ShowWeather";
import axios from "axios";

const API_KEY = "YourApiKey";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [isLoading, setisLoading] = useState(false);

  const GetCityValue = (city) => {
    setCity(city);
  };

  const fetchData = async () => {
    try {
      setisLoading(true);
      if (city) {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        const weatherData = await response.data;
        setWeather(weatherData);
      }

      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    } finally {
      setisLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-[1000px] h-[600px] bg-transparent backgroundShadow rounded-2xl">
          <div className="bg-[url('/public/star.png')] bg-center bg-repeat w-full h-full p-13">
            <Header />
            <Search InputValue={GetCityValue} />
            <ShowWeather weather={weather} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
