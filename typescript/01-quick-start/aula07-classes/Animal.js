"use strict";
var Animal = (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.move = function (distanciaEmMetros) {
        console.log(this.nome + " moveu " + distanciaEmMetros + "m.");
    };
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=Animal.js.map