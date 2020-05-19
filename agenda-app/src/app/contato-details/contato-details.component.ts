import { Component, OnInit, Inject } from '@angular/core';
import { Contato } from '../contato/contato';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-contato-details',
  templateUrl: './contato-details.component.html',
  styleUrls: ['./contato-details.component.css']
})
export class ContatoDetailsComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ContatoDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public contato: Contato) { }

  ngOnInit(): void {
   
  }

  fechar(){
    this.dialogRef.close();
  }

}
