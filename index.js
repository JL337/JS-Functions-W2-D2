// function inlineScript(value1){
// 	var message = "Hello, World " + value1;
// 	alert(message);
// }
// inlineScript("markson");

// function inlineScript2(value1){
// 	var message = "Hello, World! " + value1;
// 	return message;
// }

// function inlineScript3(value1,value2){
// 	var msg = "Hello, World! " + value1 +" "+value2;
// 	return msg;
// }
// // var h = inlineScript2("markson aigbodi");
// var fname = inlineScript3("markson", "aigbodi");
// // alert(h);
// alert(fname);


function add(num1, num2){
	return num1+num2;
}
function sub(num1, num2){
	return num1-num2;
}
function mul(num1, num2){
	return num1*num2;
}
function div(num1, num2){
	return num1/num2;
}
function squareRoot(num1){
	return Math.sqrt(num1);
}
function power(num1, num2){
	return Math.pow(num1, num2);
}

function bmi(num1, num2){
	return ((num1/num2)/(num2));
}

function mort(num1, num2, num3){
	var four = (num2/100);
	//var four calculates the value of the monthly interest rate and converts it into a decimal value, true value of, c
	var five = Math.pow((1+four),num3)
	//var five calculates the output of ((1+C)^n), exponential
	return (((num1*four)*(five))/(five));
	//Return calculated final calculation for monthly re-payment, P
}

//anonymous function, it has no name!
// var nameFn = function(name){
// 	return 'Hello '+ name;
// }
// var x = nameFn("markson");
// alert(x);


var loop = "y";

while (loop === "y"){
	calcChoice = prompt("Choose your calculator. Type one letter only. 'c' is the calc, 'b' is the BMI calc, 'm' is the mortgage calc.");
	if (calcChoice === "c"){ 
		choice = prompt("Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (sq)areroot (pow)er") || ("a");
		value1 = parseInt(prompt("Enter first value"));
		if (choice !== "sq") { 
			value2 = parseInt(prompt("Enter the second value"));
		}
		switch (choice) {
			case "pow":
				alert(power(value1,value2));
				break;
			case "sq":
				alert(squareRoot(value1));
				break;
			case "a":
				alert(add(value1,value2));
				break;
			case "s":
				alert(sub(value1, value2));
				break;	
			case "m":
				alert(mul(value1,value2));
				break;	
			case "d":
				alert(div(value1,value2));
				break;	
			default:
				alert("Unrecognised Input");		
		}
	}
	else if (calcChoice === "b"){
			value1 = parseInt(prompt("Enter your weight in kg")); 
			value2 = parseFloat(prompt("Enter the height in metres"));
			alert("BMI is: "+ bmi(value1, value2));
	} 
	else if (calcChoice === "m"){
		value1 = parseFloat(prompt("Input your mortgage loan amount in Pounds and Pence only. Do not use a comma to seperate thousands."));
		//value1 is the Mortage Loan amount, L	
		value2 = parseFloat(prompt("Input your montly interest rate. This is the annual interest rate divided by 12."));
		//value 2 is the Monthly interest rate, this is the percentage/12, this value is equal to, c*100
		value3 = parseInt(prompt("Input the total number of months in the loan. This is the number of years multiplied by 12."));
		//value3 is the Number of months in the loan, interger, n
		alert("Your monthly mortgage payment is " + mort(value1, value2, value3) );
	}
}