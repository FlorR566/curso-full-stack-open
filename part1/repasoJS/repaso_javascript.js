// VARIABLES:
console.log("___________ VARIABLES ___________");
const x = 1;
let y = 5;

console.log(x, y); // se imprime 1 5
y += 10;
console.log(x, y); // se imprime 1 15
y = "sometext";
console.log(x, y); // se imprime 1 sometext
// x = 4;  // provoca un error.

// ARRAYS:
console.log("___________ ARRAYS ___________");
const t = [1, -1, 3];

t.push(5);

console.log(t.length); // se imprime 4
console.log(t[1]); // se imprime -1

t.forEach((value) => {
	// recorre los números guardados dentro del array 't'
	console.log(value); // se imprimen los números 1, -1, 3, 5 cada uno en su propia línea
});

// Es preferible usar el método 'Concat' antes que push para REACT.
const te = [1, -1, 3];

const te2 = t.concat(5); // crea un nuevo array

console.log(te); // se imprime [1, -1, 3]
console.log(te2); // se imprime [1, -1, 3, 5]

// MAP:
console.log("___________ MAP ___________");
const ti = [1, 2, 3];

const m1 = ti.map((value) => value * 2);
console.log(m1); // se imprime [2, 4, 6]

// se pueden agregar strings de HTML:
const m2 = ti.map((value) => "<li>" + value + "</li>");
console.log(m2); // se imprime [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]

// También es posible la asignación de Desestructuración:
const ta = [1, 2, 3, 4, 5];

const [first, second, ...rest] = ta;

console.log(first, second); // se imprime 1 2
console.log(rest); // se imprime [3, 4 ,5]

// OBJETOS:
console.log("___________ OBJETOS ___________");
const object1 = {
	name: "Arto Hellas",
	age: 35,
	education: "PhD",
};

const object2 = {
	name: "Full Stack web application development",
	level: "intermediate studies",
	size: 5,
};

const object3 = {
	name: {
		first: "Dan",
		last: "Abramov",
	},
	grades: [2, 3, 5, 3],
	department: "Stanford University",
};

// Nos referimos a un objeto usando '.'
console.log(object2.name); // se imprime 'Full Stack web application development'
const fieldName = "size";
console.log(object2[fieldName]); // se imprime 5
console.log(object1.age); // imprime 35

// Agregamos propiedades a un objto usando '.'
object3.name.address = "Helsinki";
object3["secret number"] = 12341; // debemos usar [] porque la palabra tiene espacios
console.log(object3);

// FUNCIONES:
console.log("___________ FUNCIONES ___________");

const sum = (p1, p2) => {
	console.log(p1);
	console.log(p2);
	return p1 + p2;
};

// llamamos a la función:
const result = sum(1, 5);
console.log(result);

// Si tenemos 1 solo parámetro, podemos excluir los paréntesis de la función.
const square = (p) => {
	console.log(p);
	return p * p;
};

console.log(square(4));

// y si la función solo contiene una expresión podemos excluir las llaves.
const square1 = (p) => p * p;

console.log(square1);

// Esta forma es particularmente útil cuando manipulamos arrays, usando el método MAP:
const w = [1, 2, 3];
const wSquared = w.map((p) => p * p);

console.log(wSquared);

// HAY DOS FORMAS DE CREAR Y DEFINIR FUNCIONES:
// 1º creando una variable a la que le asignamos una función:
const average = function (a, b) {
	return (a + b) / 2;
};

const result1 = average(2, 5);
console.log(result1); // result ahora es 3.5

// 2º usando la expresión de función:
function product(a, b) {
	return a * b;
}

const resultado = product(2, 6);
console.log(resultado); // result es = 12
