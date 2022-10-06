import React from "react";
import Input from "./components/Input";
import Data from "./components/Data";

function Main(props) {

    const [zipCode, setZipCode] = React.useState("33712")
    const [weather, setWeather] = React.useState({})

    const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
    const apiKey = "RPFACPSS5WUZVHWPLJY78GUXQ"
    const apiUrl = baseUrl + "USA%20(" + zipCode + ")?unitGroup=metric&key=" + apiKey + "&contentType=json"

    function handleWeatherData(data) {
        return{
            location: (
                data.resolvedAddress.split(", ")
                ).map(data => <h3>{data}</h3>),
            tempature: data.currentConditions.temp,
            humidity: data.currentConditions.humidity,
            forecast: data.currentConditions.conditions,
            outlook: data.description,
            timeOffset: data.tzoffset
        }
    }

    React.useEffect(() => {
            fetch(apiUrl)
                .then(res => res.json())
                .then(data => setWeather(handleWeatherData(data)))
        }, [apiUrl])
        
    return (
        <div
            className={props.darkMode ? "mainDark" : "mainLight"}
        >
            <Input setZipCode={setZipCode} />
            <Data weather={weather} />
        </div>
    )
};

export default Main;