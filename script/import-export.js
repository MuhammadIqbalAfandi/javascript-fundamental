export function sayHello(name) {
  console.info(`Hello ${name}`)
}

export function sayGoodBye(name) {
  console.info(`Good Bye ${name}`)
}

export const author = 'Muhammad Iqbal Afandi'

export class Person {
  constructor(name) {
    this.name = name
  }

  sayHello(name) {
    console.info(`Hello ${name}, my name is ${this.name}`)
  }
}
