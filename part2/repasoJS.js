var animals = [
	{ name: "Flufflykins", species: "rabbit" },
	{ name: "Caro", species: "dog" },
	{ name: "Hamilton", species: "dog" },
	{ name: "Harold", species: "fish" },
	{ name: "Ursula", species: "cat" },
	{ name: "Jimmy", species: "fish" },
];

// usando Map
var namesMap = animals.map(function (animal) {
	return animal.name;
});

console.log("Map: ", namesMap);

// usando Arrow Functions
var namesArrow = animals.map((i) => i.name);
console.log("\nArrow: ", namesArrow);

// usando for loop
var namesLoop = [];
for (var i = 0; i < animals.length; i++) {
	namesLoop.push(animals[i].name);
}
console.log("\nFor:", namesLoop);

// =================== OTRO EJEMPLO USANDO REDUCE ===================
var orders = [
	{ amount: 250 },
	{ amount: 400 },
	{ amount: 100 },
	{ amount: 325 },
];

// usando Reduce
var totalAmount = orders.reduce(function (sum, order) {
	//console.log(sum, order);
	return sum + order.amount;
}, 0); // colocamos un valor inicial para la suma
console.log(totalAmount);

// Usando Arrow function
var totalAmountA = orders.reduce((sum, order) => sum + order.amount, 0);

console.log(totalAmountA);

// Usando for loop
var totalAmount1 = 0;
for (var i = 0; i < orders.length; i++) {
	totalAmount1 += orders[i].amount;
}

console.log(totalAmount1);
