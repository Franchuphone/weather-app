import mainCard from "../templates/weather-main.html"
import searchBar from "../templates/search-bar.html"
import forecastCard from "../templates/forecast-card.html"

let conditions = [
    "rain", "clear", "snow", "cloud", "wind", "storm",
]

export function displayWeather( data ) {
    const { weatherContainer, welcomeMsg } = listenElements();
    if ( welcomeMsg ) welcomeMsg.remove();
    let html = mainCard;
    let forecastDivs = "";
    Object.keys( data ).forEach( ( key ) => {
        if ( typeof data[ key ] === "object" ) {
            for ( let i = 0; i < data[ key ].length; i++ ) {
                const forecast = data[ key ][ i ];
                let forecastHtml = forecastCard;
                Object.keys( forecast ).forEach( ( key ) => {
                    forecastHtml = forecastHtml.replace( `{{${ key }}}`, forecast[ key ] );
                } )
                forecastDivs += forecastHtml;
            }
            html = html.replace( "{{weatherForecast}}", forecastDivs );
        } else {
            html = html.replaceAll( `{{${ key }}}`, data[ key ] );
        }
    } )
    console.log( html )
    weatherContainer.innerHTML = "";
    weatherContainer.innerHTML = html;


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

    return { input, inputButton, inputDiv, container, weatherContainer, body, welcomeMsg }
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

function changeIcon( dayCondition ) {

}

function handleCondition( dayCondition ) {
    conditions.forEach( condition => {
        if ( dayCondition.includes( condition ) ) { dayCondition = condition }
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