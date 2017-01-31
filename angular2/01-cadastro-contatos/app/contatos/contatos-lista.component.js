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
var contato_service_1 = require('./contato.service');
var dialog_service_1 = require('../dialog.service');
var ContatosListaComponent = (function () {
    /*Injeção de dependência através do reconhecimento do metadado "providers" no
    * próprio componente, módulo ou módulo pai (módulo root)
    */
    function ContatosListaComponent(contatoService, dialogService) {
        this.contatoService = contatoService;
        this.dialogService = dialogService;
        this.contatos = [];
    }
    ContatosListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contatoService.findAll()
            .then(function (contatos) {
            _this.contatos = contatos;
        }).catch(function (error) {
            console.log(error);
            _this.mostrarMsg({
                isSuccess: false,
                mensagem: "Erro ao buscar contatos!"
            });
        });
    };
    ContatosListaComponent.prototype.onDelete = function (contato) {
        var _this = this;
        this.dialogService.confirm()
            .then(function (confirma) {
            if (confirma) {
                _this.contatoService
                    .delete(contato)
                    .then(function () {
                    _this.contatos = _this.removeContato(contato);
                    _this.mostrarMsg({
                        isSuccess: true,
                        mensagem: "Contato removido com sucesso!"
                    });
                })
                    .catch(function (err) {
                    console.log(err);
                    _this.mostrarMsg({
                        isSuccess: false,
                        mensagem: "Erro ao remover contato!"
                    });
                });
            }
        });
    };
    ContatosListaComponent.prototype.removeContato = function (contatoParaRemover) {
        var contatosAtualizados = new Array();
        for (var i = 0; i < this.contatos.length; i++) {
            if (this.contatos[i].id != contatoParaRemover.id) {
                contatosAtualizados.push(this.contatos[i]);
            }
        }
        return contatosAtualizados;
    };
    ContatosListaComponent.prototype.mostrarMsg = function (mensagem) {
        var _this = this;
        this.mensagem = mensagem;
        this.isSuccess = mensagem.isSuccess;
        if (this.isSuccess) {
            if (this.currentTimeout) {
                clearTimeout(this.currentTimeout);
            }
            this.currentTimeout = setTimeout(function () {
                _this.mensagem = undefined;
            }, 3000);
        }
    };
    ContatosListaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contatos-lista',
            templateUrl: 'contatos-lista.component.html'
        }), 
        __metadata('design:paramtypes', [contato_service_1.ContatoService, dialog_service_1.DialogService])
    ], ContatosListaComponent);
    return ContatosListaComponent;
}());
exports.ContatosListaComponent = ContatosListaComponent;
//# sourceMappingURL=contatos-lista.component.js.map