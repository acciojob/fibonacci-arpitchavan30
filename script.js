function fibonacci(num) {
// your code here
	let a = 0;
	let b = 1;
	if(num<=1) return num;

	for(let i=2;i<=num;i++){
		const c = a+b;
		a=b;
		b=c;
	}
	return b;
}

module.exports = fibonacci;
