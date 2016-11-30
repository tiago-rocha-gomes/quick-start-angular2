import { Injectable } from '@angular/core';

import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';

@Injectable()
export class ContatoService{

    getContatos(): Promise<Contato[]>{
        return Promise.resolve(CONTATOS);
    };

    getContato(id: number): Promise<Contato>{
        return this.getContatos().then(
            (contatos: Contato[]) => {
                return contatos.find(
                    (item: Contato) => {
                        return item.id === id;
                    }
                );
            }
        ) 
    }

}