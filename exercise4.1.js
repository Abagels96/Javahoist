function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar?
		console.log(innerVar); // Can we access innerVar?
	}

	innerFunction();
}

outerFunction();

//We can access both of these since the outerVar is carried down from the outerFunction
// and the innerVar is declared within the innerFunction and the innerFunction is called also.Closure helps us see both