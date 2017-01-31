import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';
import { ServiceInterface } from './../interfaces/services.interface';


import { Observable } from 'rxjs';

@Injectable()
export class ContatoService implements ServiceInterface<Contato>{

    private contatosUrl:string = "app/contatos";
    private headers:Headers = new Headers({"Content-Type": "application/json"});

    constructor(
        private http: Http
    ){}

    findAll(): Promise<Contato[]>{
        return this.http.get(this.contatosUrl)
            .toPromise()
            .then(response => response.json().data as Contato[])
            .catch(this.handleError);
    };

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    find(id: number): Promise<Contato>{
        return this.findAll().then(
            (contatos: Contato[]) => {
                return contatos.find(
                    (item: Contato) => {
                        return item.id === id;
                    }
                );
            }
        ) 
    }

    create(contato: Contato): Promise<Contato>{
        return this.http
        .post(this.contatosUrl, JSON.stringify(contato), {headers: this.headers})
        .toPromise()
        .then((response:Response) => {
            return response.json().data as Contato;
        })
        .catch(this.handleError);
    }

    update(contato: Contato): Promise<Contato>{
        const url = `${this.contatosUrl}/${contato.id}`;
        return this.http
        .put(url, JSON.stringify(contato), {headers: this.headers})
        .toPromise()
        .then(() => {
            return contato as Contato;
        })
        .catch(this.handleError);
    }

    delete(contato: Contato): Promise<Contato>{
        const url = `${this.contatosUrl}/${contato.id}`;
        return this.http
        .delete(url, {headers: this.headers})
        .toPromise()
        .then(() => {
            return contato as Contato;
        })
        .catch(this.handleError);
    }

    search(term: string): Observable<Contato[]>{
        return this.http
        .get(`${this.contatosUrl}/?nome=${term}`)
        .map((res:Response) => { return res.json().data as Contato[] });
    }

}