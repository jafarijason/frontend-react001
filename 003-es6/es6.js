class Animal {
    constructor(name) {
        this._name = name
    }
    get name() {
        return this._name
    }
    set name(newName) {
        this._name = newName
    }
    makeASound() {
        console.log('hello2')
    }
    static whoRU() {
        console.log('animal')
    }

}

const x = new Animal("rick")
console.log(x.name)

x.name = "ssss"
//-----
console.log(x.name)
x.makeASound()
//---
Animal.whoRU()
//-

class Dog extends Animal {
    constructor(...args) {
        super(...args)
    }
}
const y = new Dog()
console.log(y.name)

const z = new Dog("gggg")
console.log(z.name)

class Cat extends Animal {
    constructor(name, height) {
        super(name)
        this._height = height
    }
    get height(){
        return this._height
    }
    woof(){
        console.log(`my name is  ${this._name} and Woof Woof`)
    }
}

const p = new Cat(`tom` , 140)

console.log(p.name)
console.log(p.height)

p.woof()
p.makeASound()