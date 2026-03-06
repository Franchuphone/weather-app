const mainCard = `<div class="weather-container">
    <div class="weather-header">
        <div class="weather-header1"><div>{{fullDate}}</div></div>
        <div class="weather-header2"><div>{{location}}</div></div>
        <div class="weather-header3"><div>{{hour}}</div></div>
    </div>
    <div class="weather-current">
        <div class="temp-all">
            <button id="temp" class="celsius">
                <div class="temp-current"><span id="temp-number">{{temp}}</span><span id="temp-unit">°C</span></div>
                <div class="temp-max-min"><span id="temp-number">{{tempMin}}</span> / <span
                        id="temp-number">{{tempMax}}</span></div>
            </button>
        </div>
        <div class="conditions">
            <img src="./img/{{icon}}.svg" alt="{{icon}} icon">
            <div class="conditions-text">{{conditions}}</div>
        </div>
        <div class="rain-proba">
            <img src="./img/weather-rainy.svg" alt="rain icon">
            <div class="rain-proba-text">{{rainProba}} %</div>
        </div>
        <div class="wind-speed">
            <img src="./img/weather-windy.svg" alt="wind icon">
            <div class="wind-speed-text">{{windSpeed}} km/h</div>
        </div>
    </div>
    <div class="weather-forecast">
        {{weatherForecast}}
    </div>
</div>`

export default mainCard;