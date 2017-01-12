import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Contato } from './contatos/contato.model';

export class InMemoryDataService implements InMemoryDbService{

    createDb(): {} {
        let contatos: Contato[] = [
            {id: 1, nome: "Tiago Rocha", email: "mba.tgomes@gmail.com", telefone: "96545-5487"},
            {id: 2, nome: "Seu Madruga", email: "madruga@gmail.com", telefone: "54654-6654"},
            {id: 3, nome: "Bob Esponja", email: "esponja@gmail.com", telefone: "54874-3652"},
            {id: 4, nome: "João Melão", email: "melao@gmail.com", telefone: "32145-7898"},
            {id: 5, nome: "Zequinha", email: "zquinha@gmail.com", telefone: "78961-3698"}
        ];
        return {contatos};
    }
}