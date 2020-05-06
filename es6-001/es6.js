if (true) {
    var x = 5
    document.write("x = " + x + "<br>")
}
document.write("x = " + x + "<br>")
//-----------
if (true) {
    let y = 6
    document.write("y = " + y + "<br>")
}
let y = 7
document.write("y = " + y + "<br>")
// ----
const PI = 3.14
if (true) {
    const PI = 7
    document.write("PI = " + PI + "<br>")
}
document.write("PI = " + PI + "<br>")
///-----
let name = "Jason"
let name2 = `jason`
document.write(`${name} <br> ${name2} <hr>  `)
let n = 1
let m = 17
document.write(`${n + m} <br>`)
/////
let kk = `jason 
jafari`
document.write(`${kk} `)
let ff = `<p> asdfsdfdfsdf sdf
sdf
</p>`
document.write(`${ff} <br>`)
///--------
let gg = `hello World`
document.write(`${gg.repeat(3)}`)
document.write(`${gg.startsWith(`h`)}<br>`)
document.write(`${gg.startsWith(`H`)} <hr>`)

document.write(`${gg.startsWith(`H`)} <hr>`)
document.write(`${gg.includes(`H`)}<hr>`)

for (let harf of name) {
    document.write(`${harf} <br>`)
}

//--------

function printKon(num = 3, num2 = 5) {
    document.write(`<hr>${num + num2}<br>`)
}
printKon()
printKon(7, 9)
printKon(5, 1)
//----
function jamBezan(...args) {
    let sum = 0
    for (let i = 0; i < args.length; i++) {
        sum += args[i]
    }
    document.write(`<hr> sum is ${sum}<hr>`)
}
jamBezan(1, 2, 3, 4, 5)
let args = [1, 2, 3, 4, 5, 6, 7, 8, 9]
jamBezan(...args)
///---

let printKon2 = (num = 3, num2 = 5) => {
    document.write(`<hr>${num + num2}<br>`)
}
printKon(5, 1)
printKon2(5, 1)
//---------
let add = (a, b) => a + b

let add10 = a => a + 10

document.write(`<hr>${add(5, 7)}<br>`)
document.write(`<hr>${add10(5)}<br>`)
///-------
let arr = [1, 2, 4, 6, 7, 8, 9]
let summm = arr.reduce((a, b) => a + b)
document.write(`<hr>${summm}<br>`)
//----
let zojha = arr.filter(a => a % 2 ===0 )
document.write(`<hr>${zojha}<br>`)

// --- 
let doubeld = arr.map(a => a*2)
document.write(`<hr>${doubeld}<br>`)