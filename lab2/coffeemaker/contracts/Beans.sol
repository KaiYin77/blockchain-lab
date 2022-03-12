// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Beans is ERC20 {

    constructor(uint256 _supply) ERC20("Beans", "BNS") {   
        _mint(msg.sender, _supply * (10 ** decimals()));
    }

}