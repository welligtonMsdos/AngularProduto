import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DepartamentoModel } from '../../departamento/departamento.model';
import { DepartamentoService } from '../../departamento/departamento.service';

@Component({
  selector: 'app-produto-modal',
  templateUrl: './produto-modal.component.html',
  styleUrls: ['./produto-modal.component.css']
})
export class ProdutoModalComponent implements OnInit {

  frmProduto!: FormGroup;
  listaDepartamento: DepartamentoModel[] = [];

  constructor(public dialogRef: MatDialogRef<ProdutoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private departamentoService: DepartamentoService,
    private dg: MatDialog) { }

  ngOnInit(): void {
    this.criaForm();
    this.GetAllDepartamento();
  }

  GetAllDepartamento() {
    this.departamentoService.GetAll().subscribe(res => {

      if (res.success) {
        this.listaDepartamento = res.data;        
      }

    }, err => {
      console.error(err);
    });
  }

  fechar() {
    this.dialogRef.close();
  }

  criaForm() {

    this.frmProduto = this.fb.group({

      departamentoId: this.fb.control(this.data.model.departamentoId, [Validators.required]), 
      descricao: this.fb.control(this.data.model.descricao, [Validators.required]),     

    });    

  } 

  salvar(){

    Object.assign(this.data.model, this.frmProduto.value);

    console.log(this.data.model);

  }

}
