// local variable i
// for (var i = 0 ; i < 10; i++)
// {
// 	console.log(i)
// }

// var x = 0;
// while (x <10){
// 	x++;
// }

// var x = 2;
// do{
// 	console.log("Hello!")
// 	x++;
// } while(x > 6);
// console.log("Loop ended!")

//access each value from the array, array starts from 0
// var MyArray = [6,2,8,9,15];
// for (var x in MyArray){

// 	console.log(MyArray[x]);
// }


var MyArray = [2,4,6,8,10,12,14,16,18,20];
//
function ForLoop(arrayin){
	for (var i = 0 ; i < arrayin.length ; i++){
		console.log(MyArray[i]);
	}
}
ForLoop(MyArray);
//
function DoLoop(arrayin){
	var i = 0;
	while (i<arrayin.length){
		console.log(MyArray[i]);
		i++;
	}
}
DoLoop(MyArray);
//
function DoWhile(arrayin){
	var i = 0;
	do{
		console.log(MyArray[i]);
		i++;
	}while (i<arrayin.length);
}
DoWhile(MyArray);
//
function ForIn(arrayin){
	for (var i in arrayin){
		console.log(MyArray[i]);
	}
}
ForIn(MyArray);
//