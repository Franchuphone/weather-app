const forecastCard = `<div>
    <div class="forecast-day">{{day}}</div>
    <div class="forecast-icon"><img src="../img/{{icon}}.svg" alt="{{icon}} icon"></div>
    <div class="forecast-conditions">{{conditions}}</div>
    <div class="forecast tempMaxMin">{{tempMin}} / {{tempMax}}</div>
</div>`

export default forecastCard;