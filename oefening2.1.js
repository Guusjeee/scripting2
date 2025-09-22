// https://data.buienradar.nl/2.0/feed/json

const response = await fetch('https://data.buienradar.nl/2.0/feed/json')
const json = await response.json()

console.log(json.forecast)