import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Contato } from './contato.model';
import { ContatoService } from './contato.service';

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html' 
})
export class ContatoDetalheComponent implements OnInit{

    contato: Contato = new Contato(0, '', '', '');
    private isNew: Boolean = true;

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void {
        this.route.params.forEach(
            (params: Params) => {
                // o '+' converte automaticamente para number'
                let id: number = +params['id'];
                if(id){
                    this.isNew = false;
                    this.contatoService.getContato(id).then(
                        (contatoBuscado: Contato) => {
                            this.contato = contatoBuscado;
                        }
                    );
                }
            }
        );
    }

    getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
        return {
            'has-danger'    : !isValid && !isPristine,
            'has-success'   : isValid && !isPristine  
        };
    }

    getFormControlClass(isValid: boolean, isPristine: boolean): {} {
        return {
            'form-control-danger'    : !isValid && !isPristine,
            'form-control-success'   : isValid && !isPristine  
        };
    }

    onSubmit():void {
        let promise;
        if(this.isNew){
            promise = this.contatoService.create(this.contato);    
        } else {
            promise = this.contatoService.update(this.contato);
        }
        promise.then(contato => this.location.back());
    }
}