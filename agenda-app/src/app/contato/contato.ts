export class Contato {

    id: number;
    nome: string;
    email: string;
    favorito: boolean;

    constructor(nome: string, email: string){
        this.nome = nome;
        this.email = email;
    }

}