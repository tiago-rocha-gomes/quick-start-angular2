import { 
    Component, 
    OnInit, 
    OnChanges, 
    Input, 
    Output, 
    SimpleChanges, 
    SimpleChange, 
    EventEmitter 
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Contato } from './contato.model';
import { ContatoService } from './contato.service';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html',
    styles: [`
        .cursor-pointer {
            cursor: pointer;
        }
    `]
})
export class ContatoBuscaComponent implements OnInit, OnChanges {
    

    @Input() busca: string;
    @Output() buscaChange: EventEmitter<string> = new  EventEmitter<string>();
    contatos: Observable<Contato[]>;
    private termosDaBusca: Subject<string> = new Subject<string>();

    constructor(
        private contatoService: ContatoService,
        private router: Router
    ) { }

    ngOnInit():void {
        this.contatos = this.termosDaBusca
        .debounceTime(500)
        .distinctUntilChanged()
        .switchMap(term => {
            return term ? this.contatoService.search(term) : Observable.of<Contato[]>([]);
        })
        .catch(err => {
            console.error(err);
            return Observable.of<Contato[]>([]);
        });
    }

    ngOnChanges(changes: SimpleChanges):void {
        let busca: SimpleChange = changes['busca'];
        this.search(busca.currentValue);
    }

    search(term:string):void{
        this.termosDaBusca.next(term);
        this.buscaChange.emit(term);
    }

    verDetalhe(contato:Contato):void{
        let link = ['contato/save', contato.id];
        this.router.navigate(link);
        this.buscaChange.emit('');
    }
}