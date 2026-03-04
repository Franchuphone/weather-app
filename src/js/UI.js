import mainCard from "../templates/weather-main.html"

const container = document.querySelector( ".container" );

export function displayWeather() {
    container.innerHTML = mainCard;
}