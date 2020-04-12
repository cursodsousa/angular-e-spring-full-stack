import { Component } from '@angular/core'

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html'
})
export class HelloComponent {

    nome: string;
    clientes: Cliente[];

    constructor(){
        this.nome = 'Fulano';
        let fulano = new Cliente('Fulano', 30);
        let cicrano = new Cliente('Cicrano', 25);
        let outro = new Cliente('Outro', 32)

        this.clientes = [fulano, cicrano, outro];

    }

}

class Cliente {
    constructor(
        public nome: string,
        public idade: number
    ){}

}