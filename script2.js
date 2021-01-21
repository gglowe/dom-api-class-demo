import RickAndMortyApi from './script.js'

let apiCall1 = new RickAndMortyApi()

let baseUrl = 'https://rickandmortyapi.com/api/'
let charEndPoint = 'character'
let endPoints = ['character', 'location', 'episode']

// (url, endPoint)
endPoints.map(endPoint => {
    let URL = baseUrl + endPoint
    apiCall1.fetchData(URL, endPoint)
})
// apiCall1.fetchData(baseUrl + endPoints[0], endPoints[0])