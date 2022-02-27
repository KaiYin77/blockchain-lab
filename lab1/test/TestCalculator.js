// to interCalculatoract with the contract
const Calculator = artifacts.require("Calculator");

contract('Calculator', () => {
  	
	// initialise the contract instance before running test
  	let contractInstance = null;
	before(async() => {
	  	contractInstance = await Calculator.deployed();
	});

	// Test1
	it('5 + 3 should be 8', async () => {
		await contractInstance.add(5, 3);  	
		const currentResult = await contractInstance.getResult.call();
		assert.equal(currentResult, 8, "result is not 8");
	});
	it('5 - 3 should be 2', async () => {
		await contractInstance.sub(5, 3);  	
		const currentResult = await contractInstance.getResult.call();
		assert.equal(currentResult, 2, "result is not 2");
	});
	it('5 * 3 should be 15', async () => {
		await contractInstance.mul(5, 3);  	
		const currentResult = await contractInstance.getResult.call();
		assert.equal(currentResult, 15, "result is not 15");
	});
	it('10 / 5 should be 2', async () => {
		await contractInstance.div(10, 5);  	
		const currentResult = await contractInstance.getResult.call();
		assert.equal(currentResult, 2, "result is not 2");
	});
	it('10 / 0 should be ERROR', async () => {
		await contractInstance.div(10, 0);  	
		const currentResult = await contractInstance.getResult.call();
	});
});
