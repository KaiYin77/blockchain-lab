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
});
