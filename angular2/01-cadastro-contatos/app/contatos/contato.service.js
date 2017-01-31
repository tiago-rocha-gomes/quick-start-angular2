"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ContatoService = (function () {
    function ContatoService(http) {
        this.http = http;
        this.contatosUrl = "app/contatos";
        this.headers = new http_2.Headers({ "Content-Type": "application/json" });
    }
    ContatoService.prototype.findAll = function () {
        return this.http.get(this.contatosUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ;
    ContatoService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    ContatoService.prototype.find = function (id) {
        return this.findAll().then(function (contatos) {
            return contatos.find(function (item) {
                return item.id === id;
            });
        });
    };
    ContatoService.prototype.create = function (contato) {
        return this.http
            .post(this.contatosUrl, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            return response.json().data;
        })
            .catch(this.handleError);
    };
    ContatoService.prototype.update = function (contato) {
        var url = this.contatosUrl + "/" + contato.id;
        return this.http
            .put(url, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then(function () {
            return contato;
        })
            .catch(this.handleError);
    };
    ContatoService.prototype.delete = function (contato) {
        var url = this.contatosUrl + "/" + contato.id;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(function () {
            return contato;
        })
            .catch(this.handleError);
    };
    ContatoService.prototype.search = function (term) {
        return this.http
            .get(this.contatosUrl + "/?nome=" + term)
            .map(function (res) { return res.json().data; });
    };
    ContatoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContatoService);
    return ContatoService;
}());
exports.ContatoService = ContatoService;
//# sourceMappingURL=contato.service.js.map