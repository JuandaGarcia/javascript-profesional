//Bulean
let muted: boolean = true
muted = false

//Number
let numerador: number = 42
let denominadodor: number = 6
let resultado = numerador / denominadodor

//String
let nombre: string = 'Juan'
let saludo = `Me llamo ${nombre}`

//Arreglos
let people: string[] = []
people = ['Juan', 'David']
people.push('Laura')

//Arreglo de varios tipos
let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push('Juan')
peopleAndNumbers.push(10)

//Enum
enum Color {
	Rojo = 'Rojo',
	Verde = 'Verde',
	Azul = 'Azul',
}

let colorFavorito: Color = Color.Verde
console.log(`Mi color es ${colorFavorito}`)

//Any
let comodin: any = 'Joker'
comodin = 1

//Object
let someObject: object = { nombre: 'Juan', age: 20 }

//tambien se puede como en js
let namee = 'Juan'
let age = 20

//funciones
//Regresa un numero
function add(a: number, b: number): number {
	return a + b
}

const sum = add(4, 6)

//Regresa una función
function createAdder(a: number): (number) => number {
	return function (b: number) {
		return b + a
	}
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)

//regresa un string
function fullName(
	fristName: string,
	lastName: string = 'NoApellido', //valor por omision
	age?: number //opcional
): string {
	return `${fristName} ${lastName} ${age}`
}

const Juan = fullName('Juan', 'Garcia', 20)
const Laura = fullName('Laura')

console.log(Juan)
console.log(Laura)

enum Colores {
	Rojo = 'Rojo',
	Verde = 'Verde',
	Azul = 'Azul',
}

//Interface
interface Rectangulo {
	ancho: number
	alto: number
	color?: Colores
}

let rect: Rectangulo = {
	ancho: 4,
	alto: 6,
	color: Colores.Verde,
}

function area(r: Rectangulo): number {
	return r.alto * r.ancho
}

const areaRect = area(rect)
console.log(areaRect)

console.log(rect.toString())

rect.toString = function () {
	return this.color ? `Un rectangulo ${this.color}` : 'Un rectangulo'
}

console.log(rect.toString())
