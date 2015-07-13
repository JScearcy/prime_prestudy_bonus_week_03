function Firstfunction(num) {
	return num *= (2 + num);
}
function SecondFunction(num) {
	return num += num * num;
}
function ThirdFunction(num) {
	return num *= 3 
}

Firstfunction(SecondFunction(ThirdFunction(2)))