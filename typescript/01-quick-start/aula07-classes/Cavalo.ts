import {Animal} from './Animal'

export class Cavalo extends Animal{
    
    constructor(nome: string){
        super(nome);
    }

    public move(distanciaEmMetros: number): void{
        console.log('GALOPANDO...');
        super.move(distanciaEmMetros);
    }
}