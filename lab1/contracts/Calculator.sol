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

