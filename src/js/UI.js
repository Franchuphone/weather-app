import mainCard from "../templates/weather-main.js"
import searchBar from "../templates/search-bar.js"
import forecastCard from "../templates/forecast-card.js"

let conditions = [
    "partly", "rain", "clear", "snow", "cloud", "wind", "storm",
]

export function displayWeather( data ) {
    const { weatherContainer, welcomeMsg, alertBox } = listenElements();
    if ( welcomeMsg ) welcomeMsg.remove();
    if ( alertBox ) alertBox.remove();
    let html = mainCard;
    let forecastDivs = "";
    Object.keys( data ).forEach( ( key ) => {
        if ( typeof data[ key ] === "object" ) {
            for ( let i = 0; i < data[ key ].length; i++ ) {
                const forecast = data[ key ][ i ];
                let forecastHtml = forecastCard;
                Object.keys( forecast ).forEach( ( key ) => {
                    if ( key === "icon" ) forecast[ key ] = handleCondition( forecast[ key ] );
                    forecastHtml = forecastHtml.replace( `{{${ key }}}`, forecast[ key ] );
                } )
                forecastDivs += forecastHtml;
            }
            html = html.replace( "{{weatherForecast}}", forecastDivs );
        } else {
            if ( key === "icon" ) data[ key ] = handleCondition( data[ key ] );
            html = html.replaceAll( `{{${ key }}}`, data[ key ] );
        }
    } )
    // console.log( html )
    weatherContainer.innerHTML = "";
    weatherContainer.innerHTML = html;
    toggleFahrenheitCelsius();
}

export function displaySearchBar() {
    const { container } = listenElements();
    container.innerHTML = searchBar;
}

export function listenElements() {
    const input = document.querySelector( "#search-location" );
    const inputButton = document.querySelector( "#search-button" );
    const inputDiv = document.querySelector( ".search-container" );
    const container = document.querySelector( ".container" );
    const weatherContainer = document.querySelector( ".display-container" );
    const body = document.querySelector( "body" );
    const welcomeMsg = document.querySelector( ".hello-message" );
    const alertBox = document.querySelector( ".alert-box" );
    const tempBoxes = document.querySelectorAll( "#temp-number" );
    const tempUnitBox = document.querySelector( "#temp-unit" );
    const tempBtn = document.querySelector( "#temp" );

    return { input, inputButton, inputDiv, container, weatherContainer, body, welcomeMsg, alertBox, tempBoxes, tempUnitBox, tempBtn }
}

export function showError( message ) {
    const alertBox = document.createElement( "div" );
    const { inputDiv } = listenElements();
    alertBox.classList.add( "alert-box" );
    alertBox.textContent = message;
    inputDiv.append( alertBox )
    setTimeout( () => alertBox.remove(), 4000 )
}

export function changeBg( dayCondition ) {
    const { body } = listenElements();
    const status = handleCondition( dayCondition );
    body.className = `${ status }`;
    if ( !testCssExists( "." + status ) ) body.className = "default"
}

function toggleFahrenheitCelsius() {
    const { tempBoxes, tempBtn, tempUnitBox } = listenElements();
    tempBtn.addEventListener( "click", () => {
        console.log( tempBoxes, tempBtn, tempUnitBox )
        if ( tempBtn.className === "fahrenheit" ) {
            tempBoxes.forEach( ( temp ) => {
                temp.textContent = Math.round( ( temp.textContent - 32 ) / 1.8 )
            } );
            tempUnitBox.textContent = "°C";
            tempBtn.className = "celsius";

        } else {
            tempBoxes.forEach( ( temp ) => {
                temp.textContent = Math.round( temp.textContent * 1.8 + 32 );
            } );
            tempUnitBox.textContent = "°F";
            tempBtn.className = "fahrenheit";
        }
    } )

}

function handleCondition( dayCondition ) {
    console.log( dayCondition )
    conditions.forEach( condition => {
        if ( dayCondition.includes( condition ) ) {
            return dayCondition = condition
        }
    } )
    cleanString( dayCondition );
    return dayCondition;
}

function testCssExists( cssRule ) {
    let bool = false
    for ( const styleSheet of document.styleSheets ) {
        for ( const rule of styleSheet.cssRules ) {
            if ( cssRule === rule.selectorText ) bool = true;
        }
    }
    return bool;
}

function cleanString( str ) {
    return str = ( str.charAt( 0 ).toLowerCase() + str.slice( 1 ).toLowerCase() );
}