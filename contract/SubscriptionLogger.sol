// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SubscriptionLogger {
    event Subscribed(address indexed user, string domain);

    function subscribe(string memory domain) external {
        emit Subscribed(msg.sender, domain);
    }
}
