// STEP 1
// Named declaration for Cat class
class Cat {
    constructor(name) {
        this.name = name
    }
    
}

// Anonymous declaration for Dog class
const Dog = class {
    constructor(name) {
        this.name = name       
    }
}


// STEP 2

const myCat = new Cat("Tsuki")
const myDog = new Dog("Rei")

// STEP 3

// class Animal {
//     constructor() {
//         console.log("The Animal has been created")
//     }
// }

// STEP 4

// class Animal {
//     constructor(animal) {
//         console.log(`The ${animal} has been created`)
//     }
// }
// const dog = new Animal('Dog')

// STEP 5

// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//     }
// }

// const dog = new Animal("dog", "German Shepherd", "gray", 90, 120)
// console.log(dog)

// STEP 6

// for (const i in dog) {
//     console.log(`${i}: ${dog[i]}`)
// }

// STEP 7

// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length       
//     }
//     speak = function() {
//         if (this.type === "dog") {
//             return `The ${this.color} dog is barking!`
//         } else if (this.type === "cat") {
//             return `The ${this.color} cat is meowing!`
//         }
//     }
// }
// const pet = new Animal("dog", "German Shepherd", "gray", 90, 120)
// console.log(pet.speak())

// STEP 8

class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type
        this.breed = breed
        this.color = color
        this.height = height
        this.length = length  

        let checkType = () => {
            return this.type === "dog" ? "dog" : "cat"
        }

        this.speak = () => {
            return `The ${checkType()} has made a noise!`
        }
    }
    
}
const pet = new Animal("dog", "German Shepherd", "gray", 90, 120)
console.log(pet.speak())

// STEP 9

String.prototype.findWords = function (word) {
    let reg = new RegExp(word, "gi")
    let mat = this.match(reg)
    return mat.length
};

const text = "This is a text to test. Test word will be repeated several times. The test is repeated a gain."
const word_find = "test"
console.log(`The word "${word_find}" was found in the text ${text.findWords(word_find)} times.`)