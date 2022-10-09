function Data(props) {
  const icon =
    "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/" +
    props.weather.icon +
    ".png";

  return (
    <div className="dataCard">
      <div className="location">{props.weather.location}</div>
      <div className="imgContainer">
        <img
          className="weatherIcon"
          src={icon}
          alt={props.weather.icon}
          width="50"
          height="50"
        />
      </div>
      <div className="weather">
        <h4>Tempature:</h4>
        <p>{props.weather.tempature}°C</p>
        <h4>Humidity:</h4>
        <p>{props.weather.humidity}%</p>
        <h4>Conditions:</h4>
        <p>{props.weather.forecast}</p>
        <h4>Outlook:</h4>
        <p>{props.weather.outlook}</p>
      </div>
    </div>
  );
}

export default Data;
