import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';
import { ContatoService } from '../contato.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { PageEvent } from '@angular/material/paginator';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ContatoDetailsComponent } from '../contato-details/contato-details.component';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  total = 0;
  pagina = 0;
  tamanho = 5;
  pageSizeOptions: number[] = [5];


  formulario: FormGroup;
  contatos: Contato[] = []; 
  colunas = ['foto', 'id', 'nome', 'email', 'favorito']

  constructor(
    private service: ContatoService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.montarFormulario();    
    this.listarContatos();
  }

  paginar(event: PageEvent){
    console.log(event)
    this.pagina = event.pageIndex
    this.listarContatos(this.pagina.toString(), this.tamanho.toString())
  }

  montarFormulario(){
    this.formulario = this.fb.group({
      nome: ['', Validators.required ],
      email: ['', [Validators.required, Validators.email] ]
    })  
  }

  listarContatos(pagina = '0', tamanho = '5'){
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
    if(!this.formulario.valid){
      const controls = this.formulario.controls;
      console.log(controls.nome.errors)
      
      return false;
    }

    const formValues = this.formulario.value;
    
    const contato: Contato = new Contato(formValues.nome, formValues.email);
    this.service.save(contato).subscribe( resposta => {
      let lista: Contato[] = [...this.contatos, resposta]
      this.contatos = lista;
      this.snackBar.open('Contato foi adicionado!', 'Sucesso!', {
        duration: 2000
      })
    })
  }

  uploadFoto(event, contato){
    const files = event.target.files;
    if(files){
      const foto = files[0]
      const formData = new FormData();
      formData.append("foto", foto);
      this.service.upload(contato, formData)
        .subscribe(response => this.listarContatos())
    }
  }

  visualizarContato(contato: Contato){
    this.dialog.open(ContatoDetailsComponent, {
      width: '400px',
      height: '450px',
      data: contato
    })
  }

}
