export async function NasaAPIConnection(year){
    let key = "yhrJeuVNnne5laYgyoULf1wHGphJRsQTVADMY6ck";
    let date = year.toString() + "-12-25";
    let query = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${key}`;


    //fetch the data
    let res = await fetch(query);

    //turn into json
    let data = await res.json();

    return data;
}