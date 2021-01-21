console.log('hello')

let URL = "https://rickandmortyapi.com/api/character"

// let createFrontEnd = (data) => {
//     let body = document.querySelector('body')

//     data.map(item => {
//         let { name, image, species, gender, status } = item
//         let createH1 = document.createElement('h1')
//         let createPara = document.createElement('p')
//         let createImg = document.createElement('img')

//         createImg.setAttribute('src', image)
//         createH1.innerHTML = name
//         createPara.innerHTML = `${name} is a ${gender} ${species} who is ${status}`

//         body.appendChild(createImg)
//         body.appendChild(createH1)
//         body.appendChild(createPara)
//     })

// }


let header = {
    'x-api-key': "key"
}

// fetch(URL, header)
//     .then(res => res.json())
//     .then(res => {
//         console.log(res)
//         createFrontEnd(res.results)
//     })
//     .catch(err => console.log(err))


let fetchData = async () => {
    let res = await fetch(URL)
    let convertedData = await res.json()
    createFrontEnd(convertedData.results)
}

// fetchData()


export default class RickAndMortyApi {
    constructor() {
        this.body = document.querySelector('body')
    }

    fetchData = async (url, endPoint) => {
        let res = await fetch(url)
        let convertedData = await res.json()
        this.checkEndPoint(endPoint, convertedData.results)
    }

    checkEndPoint = async (endPoint, data) => {
        if (endPoint == 'character') {
            this.createCharFrontEnd(data)
        } else if (endPoint == 'location') {
            this.createLocationFrontEnd(data)
        } else {
            this.createEpisodeFrontEnd(data)
        }
    }

    createCharFrontEnd = (data) => {
        let createContainer = document.createElement('div')
        createContainer.setAttribute('class', 'character-gallery-container')
        data.map(item => {
            let createIndividualContainer = document.createElement('div')
            let { name, image, species, gender, status } = item
            let createH1 = document.createElement('h1')
            let createPara = document.createElement('p')
            let createImg = document.createElement('img')

            createImg.setAttribute('src', image)
            createH1.innerHTML = name
            createPara.innerHTML = `${name} is a ${gender} ${species} who is ${status}`

            createIndividualContainer.setAttribute('class', 'character-container')
            createIndividualContainer.appendChild(createImg)
            createIndividualContainer.appendChild(createH1)
            createIndividualContainer.appendChild(createPara)
            createContainer.appendChild(createIndividualContainer)
        })
        this.body.appendChild(createContainer)

    }

    createLocationFrontEnd = (data) => {
        data.map(item => {
            let { name, type, dimension, residents } = item
            let createH1 = document.createElement('h1')
            let createPara = document.createElement('p')

            createH1.innerHTML = name
            createPara.innerHTML = `${name} is a ${type} which is located in the ${dimension} dimension`

            this.body.appendChild(createH1)
            this.body.appendChild(createPara)
        })

    }

    createEpisodeFrontEnd = (data) => {
        data.map(item => {
            let { name, air_date, episode, characters } = item
            let createH1 = document.createElement('h1')
            let createPara = document.createElement('p')

            createH1.innerHTML = name
            createPara.innerHTML = `${episode}: ${name} was aired on ${air_date}`

            this.body.appendChild(createH1)
            this.body.appendChild(createPara)
        })

    }
}


// exports.RickAndMortyApi = RickAndMortyApi