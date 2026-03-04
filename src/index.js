import "./css/modern-normalize.css"
import "./css/main-style.css"
import images from "/src/js/images.js";
import { fetchWeatherData, getWeather } from "./js/data";
import { displayWeather } from "./js/UI";


displayWeather()

async function getWeatherData( location ) {
    const data = await fetchWeatherData( location )

    if ( data ) console.log( data )
}


getWeatherData()
// document.querySelectorAll( ".container > div > div" ).forEach( ( div ) => {
//     const randomColor = Math.floor( Math.random() * 16777215 ).toString( 16 ).padStart( 6, '0' );
//     const hexColor = `#${ randomColor }`;
//     div.style.backgroundColor = hexColor;
// } )

// for ( i = 0; i<=)