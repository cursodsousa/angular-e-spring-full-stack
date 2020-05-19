import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';
import { ContatoService } from '../contato.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  total = 0;
  pagina = 0;
  tamanho = 10;
  pageSizeOptions: number[] = [5];

  formulario: FormGroup;
  contatos: Contato[] = []; 
  colunas = ['id', 'nome', 'email', 'favorito']

  constructor(
    private service: ContatoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.montarFormulario();    
    this.listarContatos();
  }

  paginar(event: PageEvent){
    console.log(event)
    this.pagina = event.pageIndex
    this.tamanho = event.pageSize;
    this.listarContatos(this.pagina.toString(), this.tamanho.toString())
  }

  montarFormulario(){
    this.formulario = this.fb.group({
      nome: ['', Validators.required ],
      email: ['', [Validators.required, Validators.email] ]
    })  
  }

  listarContatos(pagina = '0', tamanho = '10'){
    this.service.list(pagina, tamanho).subscribe(response => {
      this.contatos = response.content;
      this.total = response.totalElements;
      this.pagina = response.number;
    })
  }

  favoritar(contato: Contato){
    this.service.favourite(contato).subscribe(response => {
      contato.favorito = !contato.favorito;
    })

  }

  submit(){
    const formValues = this.formulario.value;
    const contato: Contato = new Contato(formValues.nome, formValues.email);
    this.service.save(contato).subscribe( resposta => {
      let lista: Contato[] = [...this.contatos, resposta]
      this.contatos = lista;
    })
  }

}
