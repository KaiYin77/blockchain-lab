#Coffeemaker (Beans) a cryptonative ERC20 Token

Hello there! I’m **Hong, Kai-Yin**, ECE student from NYCU!!

0710851 / ECE 4C



## Step by step

### Initialize Project
1 . create a directory name "coffeemaker"

2 . initialize the project

```
truffle init
```
3 . current file structure

---

### Write Smart Contract

#### Specification
1. Addition
2. Substration
3. Multiplication
4. Division


#### Write Calculate.sol in contracts/
- include
  - **operator** function
  - **get** function for return result

```
// SPDX-License-Identifiler: MIT
pragma solidity >=0.4.22 <0.9.0;

/**
 * @title Calculator
 * @dev operator and getter
 */

contract Calculator {
  uint result;
  
  function add(uint a, uint b) public {
    result = a + b;
  }

  function sub(uint a, uint b) public {
    result = a - b;
  }

  function mul(uint a, uint b) public {
    result = a * b;
  }

  function div(uint a, uint b) public {
    require(b > 0, "[Alart] Denomintor should be larger than zero !!!");

    result = a / b;
  }

  function getResult() public view returns(uint){
    return result;
  }
}

```

#### Compile and Build Artifact

```
truffle compile
```
- automatically create build/contracts/ and a .json file in it
- ABI, Byte code, function definition... will include in the .json file

---

### Deployment

#### Modify config file
- Uncomment below for local development by Ganache

```
 development: {
       host: "127.0.0.1",     // Localhost (default: none)
       port: 7545,            // Standard Ethereum port (default: none)
       network_id: "*",       // Any network (default: none)
 },
```
#### Write calculator_migrations.js in migrations/
- Deploy and construct for smart contract

```
const Calculator = artifacts.require("Calculator");
 
module.exports = function (deployer) {
  deployer.deploy(Calculator);
};
```

#### Deploy

- Deploy to test-net or main-net or local

```
truffle deploy --network development 
```
---

### Test
#### Write TestCalculate.js in test/
- Every test cases take gas fee

``` 
// to interact with the contract
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
	// Test2
	it('5 - 3 should be 2', async () => {
		await contractInstance.sub(5, 3);  	
		const currentResult = await contractInstance.getResult.call();
		assert.equal(currentResult, 2, "result is not 2");
	});
	// Test3
	it('5 * 3 should be 15', async () => {
		await contractInstance.mul(5, 3);  	
		const currentResult = await contractInstance.getResult.call();
		assert.equal(currentResult, 15, "result is not 15");
	});
	// Test4
	it('10 / 5 should be 2', async () => {
		await contractInstance.div(10, 5);  	
		const currentResult = await contractInstance.getResult.call();
		assert.equal(currentResult, 2, "result is not 2");
	});
	// Test5
	it('10 / 0 should be ERROR', async () => {
		await contractInstance.div(10, 0);  	
		const currentResult = await contractInstance.getResult.call();
	});
```
#### Run test
```
truffle test
```
---

