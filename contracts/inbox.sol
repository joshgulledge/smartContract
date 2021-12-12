pragma solidity ^0.4.17;

contract Inbox {
    // storage variable
    string public message;

    // constructor function
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    // normal functions
    function setMessage(string newMessage) public {
        message = newMessage;
    }

    function eraseMessage() public {
        message = 'No Message';
    }

}