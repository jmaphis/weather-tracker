import React from "react";
import Input from "./components/Input";
import Data from "./components/Data";
import EmptyCard from "./components/EmptyCard";

function Main(props) {
  const [zipCode, setZipCode] = React.useState("");
  const [weather, setWeather] = React.useState({});

  const baseUrl =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const apiKey = "RPFACPSS5WUZVHWPLJY78GUXQ";
  const apiUrl =
    baseUrl +
    "USA%20(" +
    zipCode +
    ")?unitGroup=metric&key=" +
    apiKey +
    "&contentType=json";

  function handleWeatherData(data) {
    return {
      location: data.resolvedAddress.split(", ").map((data) => (
        <div key={data}>
          <h3>{data}</h3>
        </div>
      )),
      tempature: data.currentConditions.temp,
      humidity: data.currentConditions.humidity,
      forecast: data.currentConditions.conditions,
      outlook: data.description,
      icon: data.currentConditions.icon,
    };
  }

  React.useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setWeather(handleWeatherData(data)));
  }, [apiUrl]);

  return (
    <div className={props.darkMode ? "mainDark" : "mainLight"}>
      <Input setZipCode={setZipCode} />
      {zipCode ? <Data weather={weather} /> : <EmptyCard />}
      <div className={props.darkMode ? "backgroundDark" : "backgroundLight"} ></div>
    </div>
  );
}

export default Main;
