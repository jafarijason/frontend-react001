function Sag(name, owner) {
    return {
        name: name,
        owner: owner,
        getInfo() {
            return `Sag name is ${this.name} and Its Owner is ${this.owner}`
        },
        adress: {
            city: 'Tehran',
            country: 'Iran'
        }
    }
}

let sag = Sag(`rich`, 'Jason')

document.write(`${sag.getInfo()} <br>`)
document.write(`my sag adress is ${sag.adress.city} <br>`)

let { adress } = sag
console.log(adress)

let arr = [1, 2, 3]
let [, , num] = arr
console.log(num)
let [, ...num2] = arr
console.log(num2)
//---
let var1 = 5;
let var3 = 6;
[var1, var3] = [var3, var1]
console.log(var1, var3)
//-------
let v = 6
console.log(typeof (v))
let g = true
console.log(typeof (g))
let h = () => 6
console.log(typeof (h))
console.log(typeof (h()))

console.log(typeof({name:`salam`}));

class SimpleClasss  {}

console.log(typeof(SimpleClasss))