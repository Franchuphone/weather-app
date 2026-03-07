import { format, parseISO } from "date-fns";
import { showError } from "./UI";

export async function fetchWeatherData( location = 'Budapest,HU' ) {
    const apiKey = 'MVVZVLRF7WWUPV7U7BZS5YYB5';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${ encodeURIComponent( location ) }?unitGroup=metric&key=${ apiKey }&contentType=json`;

    try {
        const request = new Request( url );
        const response = await fetch( request );
        if ( !response.ok ) {
            throw new Error( `Error fetching weather data: ${ response.statusText }` );
        }
        const data = await response.json();
        console.log( data )
        return filterWeatherData( data );
    } catch ( error ) {
        console.error( 'Fetch Error: ', error );
        showError( "No location was found, try again with a different name" );
        if ( error.response ) {
            error.response.text().then( ( errorMessage ) => {
                showError( "Connectivity issue, try again" )
                console.error( 'Error Details:', errorMessage );
            } );
        }
    }
}

function filterWeatherData( data ) {
    const date = new Date();
    const localDate = date.toLocaleString( ( 'en-en' ), { timeZone: data.timezone } )
    console.log( localDate )
    const now = data.currentConditions;
    const today = data.days[ 0 ];

    return {
        location: cleanString( data.resolvedAddress ),
        fullDate: format( localDate, "EEEE d MMMM y" ),
        hour: format( localDate, "kk:mm" ),
        temp: cleanNumber( now.temp ),
        tempMax: cleanNumber( today.tempmax ),
        tempMin: cleanNumber( today.tempmin ),
        icon: now.icon,
        conditions: now.conditions,
        rainProba: cleanNumber( today.precipprob ),
        windSpeed: cleanNumber( today.windspeed ),
        forecast: data.days.splice( 1, 6 ).map( ( day ) => ( {
            day: format( parseISO( day.datetime ), "EEE" ),
            conditions: day.conditions,
            icon: day.icon,
            tempMax: cleanNumber( day.tempmax ),
            tempMin: cleanNumber( day.tempmin ),
        } ) )
    }
}


function cleanString( string ) {
    // string = string.substring( 0, string.indexOf( "," ) );
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 ).toLowerCase();
}

function cleanNumber( number ) {
    return Math.round( number );
}