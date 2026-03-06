import "./css/modern-normalize.css";
import "./css/main-style.css";
import images from "/src/js/images.js";
import { fetchWeatherData, getWeather } from "./js/data";
import { changeBg, createGif, displaySearchBar, displayWeather, listenElements, showError } from "./js/UI";




displaySearchBar();

const { input, inputButton } = listenElements();

async function getWeatherData( location ) {
    const gifDiv = createGif();
    const data = await fetchWeatherData( location );
    gifDiv.remove();
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