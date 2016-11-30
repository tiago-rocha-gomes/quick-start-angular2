export class Animal {
    private nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    public move(distanciaEmMetros: number): void{
        console.log(`${this.nome} moveu ${distanciaEmMetros}m.`)
    }
}