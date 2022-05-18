function sayHello(name) {
  console.info(`Hello ${name}`)
}

function sayGoodBye(name) {
  console.info(`Good Bye ${name}`)
}

const author = 'Muhammad Iqbal Afandi'

class Person {
  constructor(name) {
    this.name = name
  }

  sayHello(name) {
    console.info(`Hello ${name}, my name is ${this.name}`)
  }
}

export { sayHello, sayGoodBye, author, Person }
