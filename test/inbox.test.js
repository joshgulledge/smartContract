const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3Inst = new Web3(ganache.provider());


class Car {
    park () {
        return 'stopped';
    };

    drive () {
        return 'vroom';
    };
}

let car;

beforeEach(() => {
     car = new Car();
});

describe('Car Test', () => {
    it('park method', () => {
        assert.equal(car.park(), 'stopped');
    });

    it('drive method', () => {
        assert.equal(car.drive(), 'vroom');
    });

});