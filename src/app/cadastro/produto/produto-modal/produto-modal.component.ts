import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { ToastrService } from 'ngx-toastr';
import { DepartamentoModel } from '../../departamento/departamento.model';
import { DepartamentoService } from '../../departamento/departamento.service';
import { ProdutoService } from '../produto.service';

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
    private produtoService: ProdutoService,
    private dg: MatDialog) { }

  ngOnInit(): void {   
    this.GetAllDepartamento();    

    this.criaForm();
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
      preco: this.fb.control(this.data.model.preco, 
                             [Validators.required,
                              Validators.min(1),
                              Validators.max(99)]),
      estoque: this.fb.control(this.data.model.estoque, 
                              [Validators.required,
                               Validators.min(1),
                               Validators.max(300)]),

    });    

  } 

  salvar(){   
    
    Object.assign(this.data.model, this.frmProduto.value);    

    if (this.data.model.id > 0) {

      this.data.model.departamento = null;
      console.log(this.data.model);

      this.produtoService.Put(this.data.model).subscribe(res => {
        
        if (res.success) {
          this.toastr.success('Salvo com sucesso.');
          this.dialogRef.close(res);
        } else{
          this.toastr.error(res.data);
        }
      }, err => {
        this.toastr.error(err);
      });

    } else {

      this.produtoService.Post(this.data.model).subscribe(res => {
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
