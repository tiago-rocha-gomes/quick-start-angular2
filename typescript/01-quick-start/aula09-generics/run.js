"use strict";
var dao_1 = require('./dao');
var Animal_1 = require('./../aula07-classes/Animal');
var Cavalo_1 = require('./../aula07-classes/Cavalo');
var dao = new dao_1.Dao();
var animal = new Animal_1.Animal('Rex');
var cavalo = new Cavalo_1.Cavalo('Titã');
dao.insert(animal);
dao.insert(cavalo);
//# sourceMappingURL=run.js.map