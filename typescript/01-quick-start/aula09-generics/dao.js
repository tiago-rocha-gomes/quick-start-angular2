"use strict";
var Dao = (function () {
    function Dao() {
        this.tableName = "";
    }
    Dao.prototype.insert = function (object) {
        console.log('inserting TYPE... ' + typeof (object));
        return true;
    };
    Dao.prototype.update = function (object) {
        return true;
    };
    Dao.prototype.delete = function (id) {
        return null;
    };
    Dao.prototype.find = function (id) {
        return null;
    };
    Dao.prototype.findAll = function () {
        return [null];
    };
    return Dao;
}());
exports.Dao = Dao;
//# sourceMappingURL=dao.js.map