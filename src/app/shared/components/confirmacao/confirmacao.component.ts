import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.css']
})
export class ConfirmacaoComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmacaoComponent>,
              @Inject(MAT_DIALOG_DATA) public message: string) { }

  ngOnInit(): void {
  }

  onClickNao(){
    this.dialogRef.close(false);
  }

  onClickSim(){
    this.dialogRef.close(true);
  }

}
