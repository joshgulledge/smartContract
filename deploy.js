// get needed files
const HdWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');
require('dotenv').config();

// set up needed variables
const keyPhase = process.env.KeyPhase;
const urlForNetwork = 'https://rinkeby.infura.io/v3/b6a8231164f34b91b006dde05d5c99a7';

// set up provider for network
const provider = new HdWalletProvider(
    keyPhase, urlForNetwork
);

// use provider obj to connet to network
const web3 = new Web3(provider);

