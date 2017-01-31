import { Component, OnInit } from '@angular/core';
import { Contato } from './contato.model';
import { ContatoService } from './contato.service';
import { DialogService } from '../dialog.service';


@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html' 
})
export class ContatosListaComponent implements OnInit{

    contatos: Contato[] = [];
    mensagem: {};
    isSuccess: boolean;
    private currentTimeout: any;

    /*Injeção de dependência através do reconhecimento do metadado "providers" no
    * próprio componente, módulo ou módulo pai (módulo root) 
    */ 
    constructor(
        private contatoService: ContatoService,
        private dialogService: DialogService,
    ){}

    ngOnInit(): void {
        this.contatoService.findAll()
        .then(
            (contatos: Contato[]) => {
                this.contatos = contatos;
            }
        ).catch(
            error => {
                console.log(error);
                this.mostrarMsg({
                    isSuccess: false, 
                    mensagem: "Erro ao buscar contatos!"
                });
            }
        )
    }

    onDelete(contato: Contato): void {
        this.dialogService.confirm()
        .then(
            (confirma: boolean) => {
                if(confirma){
                    this.contatoService
                    .delete(contato)
                    .then(
                        () => {
                            this.contatos = this.removeContato(contato);
                            this.mostrarMsg({
                                isSuccess: true, 
                                mensagem: "Contato removido com sucesso!"
                            });
                        }
                    )
                    .catch(err => {
                        console.log(err);
                        this.mostrarMsg({
                            isSuccess: false, 
                            mensagem: "Erro ao remover contato!"
                        });
                    });
                }
            }
        );
    }

    private removeContato(contatoParaRemover: Contato): Contato[]{
        let contatosAtualizados: Contato[] = new Array<Contato>(); 
        for(var i = 0; i < this.contatos.length; i++){
            if(this.contatos[i].id != contatoParaRemover.id){
                contatosAtualizados.push(this.contatos[i]);
            }
        }
        return contatosAtualizados;
    }

    private mostrarMsg(mensagem:{isSuccess: boolean, mensagem: string}):void{
        this.mensagem = mensagem;
        this.isSuccess = mensagem.isSuccess;
        if(this.isSuccess){
            if(this.currentTimeout){
                clearTimeout(this.currentTimeout);
            }
            this.currentTimeout = setTimeout(() => {
                this.mensagem = undefined;
            }, 3000);
        }
    }
}