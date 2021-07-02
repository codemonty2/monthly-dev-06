
// function displayMessage(name) {
//     console.log('Hello ' + name)
// }

// displayMessage(54)

import fetch from "node-fetch"

interface UUIDServiceResponse {
    uuid: string
}

// const wibble = {
    
// }

// const wibble: UUIDServiceResponse = {
//     uuid: '52'
// }

async function displayUUID() {
    const response = await fetch('https://httpbin.org/uuid')
    // fetch()
    const json = await response.json() as UUIDServiceResponse
    // json.uuid
    console.log(json.uuid)
}

displayUUID()
