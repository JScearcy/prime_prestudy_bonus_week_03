function firstfunction(num) {
	return num *= (2 + num);
}
function secondFunction(num) {
	return num += num * num;
}
function thirdFunction(num) {
	return num *= 3 
}

firstFunction(secondFunction(thirdFunction(2)))
