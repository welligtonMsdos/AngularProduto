import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConfirmacaoComponent } from 'src/app/shared/components/confirmacao/confirmacao.component';
import { DepartamentoService } from '../departamento.service';

@Component({
  selector: 'app-departamento-modal',
  templateUrl: './departamento-modal.component.html',
  styleUrls: ['./departamento-modal.component.css']
})
export class DepartamentoModalComponent implements OnInit {
  
  frm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<DepartamentoModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private toastr: ToastrService,
              private fb: FormBuilder,
              private departamentoService: DepartamentoService,
              private dg: MatDialog) { 
              }

  ngOnInit(): void {
    this.criaForm();
  }

  fechar() {
    this.dialogRef.close();
  }

  criaForm(){

    this.frm = this.fb.group({

      descricao: this.fb.control(this.data.model.descricao),
      // nome2: this.fb.control(''),
      // nome3: this.fb.control(''),
      // nome4: this.fb.control(''),

    });

  }

  salvar() {

    Object.assign(this.data.model, this.frm.value);

    this.departamentoService.Post(this.data.model).subscribe(res=>{
      if(res.success){
        this.toastr.success('Salvo com sucesso.');
        this.dialogRef.close(res);
      }
    }, err=>{
      this.toastr.error(err);
    });
    
  }

}
