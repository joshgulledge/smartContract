const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3Inst = new Web3(ganache.provider());
const {interface, bytecode} = require('../compile');

let accounts;
let inbox;
const initialString = 'Hello World';

beforeEach(async () => {
    // List of all accounts
    accounts = await web3Inst.eth.getAccounts();

    // Use account to deploy contacts
    inbox = await new web3Inst.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: [initialString]})
        .send({from: accounts[0], gas: '1000000'});
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });

    it('has default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, initialString);
    });

    it('sets a new messaage', async () => {
        const newMessage = 'Welcome to Web3';
        await inbox.methods.setMessage(newMessage).send({from: accounts[0]});
        const updatedMessage = await inbox.methods.message().call();
        assert.equal(updatedMessage, newMessage);
    });

    it('erasesMessage', async () => {
        await inbox.methods.eraseMessage().send({from: accounts[1]});
        const erasedMessage = await inbox.methods.message().call();
        assert.equal(erasedMessage, 'No Message');
    })
});
