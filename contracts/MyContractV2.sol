// SPDX-License-Identifier: MIT
pragma solidity =0.8.18;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MyContract is Initializable{
    uint256 private value1;
    uint256 private value2;
    uint256 private value3;

    function initialize(uint256[3] memory _value) public initializer{
        value1 = _value[0];
        value2 = _value[1];
        value3 = _value[2];
    }

    function version() public pure returns (uint256) {
        return 2;
    }
}