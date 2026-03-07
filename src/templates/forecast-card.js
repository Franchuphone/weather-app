const forecastCard = `<div>
    <div class="forecast-day">{{day}}</div>
    <div class="forecast-icon"><img src="./img/{{icon}}.svg" alt="{{icon}} icon"></div>
    <div class="forecast-conditions">{{conditions}}</div>
    <div class="forecast-tempMaxMin"><span id="temp-number">{{tempMin}}</span>° / <span id="temp-number">{{tempMax}}</span>°</div>
</div>`

export default forecastCard;