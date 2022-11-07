// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Counter {
    mapping(address => uint) public counters;

    function getCounter() public view returns(uint) {
        return counters[msg.sender];
    }

    function incriment() public {
        counters[msg.sender] ++;
    }

    function decrimene() public {
        counters[msg.sender] --;
    }
}