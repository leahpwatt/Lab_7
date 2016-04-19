var groceryList = [
		{ 
			name: "strawberries",
			price: 2.99
		},
		{	name: "yogurt",
			price: 3.49
		},
		{	name: "juice",
			price: 1.99
		},
		{	name: "bagels",
			price: 2.49
		}
	];

var total = 0;

groceryList.forEach(function(el){
	console.log(el.name, el.price);
	total = el.price += total;
});

console.log("My total cost is " + total);





