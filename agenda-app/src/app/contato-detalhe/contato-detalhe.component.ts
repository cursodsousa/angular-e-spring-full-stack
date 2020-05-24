import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Contato } from '../contato/contato';

@Component({
  selector: 'app-contato-detalhe',
  templateUrl: './contato-detalhe.component.html',
  styleUrls: ['./contato-detalhe.component.css']
})
export class ContatoDetalheComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ContatoDetalheComponent>,
    @Inject(MAT_DIALOG_DATA) public contato: Contato
  ) { }

  ngOnInit(): void {
  }

  fechar(){
    this.dialogRef.close();
  }

}
