import "./css/modern-normalize.css";
import "./css/main-style.css";
import images from "/src/js/images.js";
import { fetchWeatherData, getWeather } from "./js/data";
import { changeBg, displaySearchBar, displayWeather, listenElements, showError } from "./js/UI";
import loadingGif from "./templates/loading-gif";




displaySearchBar();

const { input, inputButton, weatherContainer, body } = listenElements();

async function getWeatherData( location ) {
    weatherContainer.innerHTML = loadingGif;
    const data = await fetchWeatherData( location );
    weatherContainer.innerHTML = "";
    if ( data ) {
        displayWeather( data )
        changeBg( data.icon )
    }
    input.value = "";
}

function validateLocation( input ) {

    if ( !input.value ) {
        showError( "It's not gonna work without data 🤷" )
        return
    }

    getWeatherData( input.value.trim() )
}

( () => {
    inputButton.addEventListener( "click", () => validateLocation( input ) );
    input.addEventListener( "keydown", ( e ) => {
        if ( e.key === "Enter" ) {
            validateLocation( input );
            e.target.blur();
        }
    } );
} )();