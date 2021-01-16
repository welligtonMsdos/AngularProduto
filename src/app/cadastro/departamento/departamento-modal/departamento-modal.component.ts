import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  frmDepartamento!: FormGroup;

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

  criaForm() {

    this.frmDepartamento = this.fb.group({

      descricao: this.fb.control(this.data.model.descricao, [Validators.required]),      

    });    

  } 

  salvar() {

    Object.assign(this.data.model, this.frmDepartamento.value);

    if (this.data.model.id > 0) {

      this.departamentoService.Put(this.data.model).subscribe(res => {
        if (res.success) {
          this.toastr.success('Salvo com sucesso.');
          this.dialogRef.close(res);
        }
      }, err => {
        this.toastr.error(err);
      });

    } else {

      this.departamentoService.Post(this.data.model).subscribe(res => {
        if (res.success) {
          this.toastr.success('Salvo com sucesso.');
          this.dialogRef.close(res);
        }
      }, err => {
        this.toastr.error(err);
      });

    }

  }

}
