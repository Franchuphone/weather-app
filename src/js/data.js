import { format, parseISO } from "date-fns";

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
        return parseWeatherData( data );
    } catch ( error ) {
        console.error( 'Fetch Error:', error );
        if ( error.response ) {
            error.response.text().then( ( errorMessage ) => {
                console.error( 'Error Details:', errorMessage );
            } );
        }
    }
}

function parseWeatherData( data ) {
    const date = new Date();
    const now = data.currentConditions;
    const today = data.days[ 0 ];
    // console.log( data.days[ 1 ] )

    return {
        location: data.resolvedAddress,
        fullDate: format( date, "EEEE d MMMM y" ),
        hour: format( date, "kk:mm" ),
        temp: Math.round( now.temp ),
        tempMax: Math.round( today.tempmax ),
        tempMin: Math.round( today.tempmin ),
        icon: now.icon,
        conditions: now.conditions,
        rainProba: Math.round( today.precipprob ),
        windSpeed: Math.round( today.windspeed ),
        forecast: data.days.splice( 1, 5 ).map( ( day ) => ( {
            day: format( parseISO( day.datetime ), "EEE" ),
            icon: day.icon,
            tempMax: day.tempmax,
            tempMin: day.tempmin,
        } ) )
    }
}


// export function getWeather( loc = 'Budapest,HU' ) {
//     let weather = 2;
//     fetchWeatherData( loc ).then( data => { return weather = data.address } )
//     console.log( weather )
// }