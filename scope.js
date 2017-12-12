var myName = "Jonathan";
var myGender = "Male";

function MyScope(name, gender){
	var age = 6;
	console.log("My name is "+name+" and I am "+gender);
	function MyInnerScope(name, gender){
		var age = 6;
		console.log("My name is "+name+" and I am "+gender+" from MyInnerScope");
	}
	MyInnerScope(name, gender);
}
// DO Function before invokation!!!, the order must match
MyScope(myName, myGender);
MyInnerScope(myName, myGender);
console.log(age);