var assert = require('chai').assert;
var {Werewolf} = require('../exercises/werewolf');

describe('Werewolf', function() {
    it('should create a werewolf', function() {
        var werewolf = new Werewolf('Freddy');
    
        assert.equal(werewolf.name, 'Freddy');
    });

    it('can change its name', function() {
        var werewolf = new Werewolf('Todd');
        var expected = 'Steve';
        werewolf.newName(expected);

        assert.equal(werewolf.name, expected);
    });

    it('defaults to a bitten type of werewolf', function() {
        var werewolf = new Werewolf('Josh');

        assert.equal(werewolf.type, 'bitten');
    });
});