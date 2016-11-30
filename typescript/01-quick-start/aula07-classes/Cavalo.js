"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal_1 = require('./Animal');
var Cavalo = (function (_super) {
    __extends(Cavalo, _super);
    function Cavalo(nome) {
        _super.call(this, nome);
    }
    Cavalo.prototype.move = function (distanciaEmMetros) {
        console.log('GALOPANDO...');
        _super.prototype.move.call(this, distanciaEmMetros);
    };
    return Cavalo;
}(Animal_1.Animal));
exports.Cavalo = Cavalo;
//# sourceMappingURL=Cavalo.js.map