function Data(props) {

    return (
        <>
            <div className="location">
                {props.weather.location}
            </div>
            <div className="weather">
                <h4>Tempature:</h4><p>{props.weather.tempature}°C</p>
                <h4>Humidity:</h4><p>{props.weather.humidity}%</p>
                <h4>Conditions:</h4><p>{props.weather.forecast}</p>
                <h4>Outlook:</h4><p>{props.weather.outlook}</p>
            </div>
        </>
    );
}

export default Data;