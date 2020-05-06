//https://jsonplaceholder.typicode.com/

let apiGetPromise = ()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(e => console.log(e))
}
 

apiGetPromise()
let apiGet = async () => {
    try {
        let response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let json = await response1.json()
        console.log(json)
    } catch (e) {
        console.log(e)
    }
}

apiGet()