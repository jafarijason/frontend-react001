setTimeout(() => console.log('Hello'), 2000)

let x = 0

let p1 = () => {
    setTimeout(() => {
        x = 5
    }, 3000)
}
// p1()



let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        x = 5
        resolve()
    }, 2000)
});

p2.then(()=>{
    console.log(x)
})

