function Werewolf(name, type = 'bitten') {
    this.name = name,
    this.type = type,
    this.newName = function (newName){
        this.name = newName;
    };
}

module.exports = {
    Werewolf
}