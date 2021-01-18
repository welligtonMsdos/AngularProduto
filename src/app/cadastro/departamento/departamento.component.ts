import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ConfirmacaoComponent } from 'src/app/shared/components/confirmacao/confirmacao.component';
import { DepartamentoModalComponent } from './departamento-modal/departamento-modal.component';
import { DepartamentoModel } from './departamento.model';
import { DepartamentoService } from './departamento.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit { 

  departamentoModel = new DepartamentoModel();
  dados: DepartamentoModel[] = [];
  dsDepartamento = new MatTableDataSource([this.departamentoModel]);

  displayedColumns: string[] = ['descricao', 'editar', 'excluir'];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort; 

  constructor(   
    private departamentoService: DepartamentoService,
    private dg: MatDialog,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.dsDepartamento.paginator = this.paginator;
    this.dsDepartamento.sort = this.sort;

    this.GetAll();
  }  

  applyFilter(filterValue: string){
    this.dsDepartamento.filter = filterValue.trim().toLocaleLowerCase();

    if(this.dsDepartamento.paginator){
      this.dsDepartamento.paginator.firstPage();
    }
  }

  GetAll() {
    this.departamentoService.GetAll().subscribe(res => {

      if (res.success) {
        this.dados = res.data;
        this.dsDepartamento.data = this.dados;
      }

    }, err => {
      console.error(err);
    });
  }

  editar(id: number) {
    this.departamentoModel = new DepartamentoModel();
    this.departamentoModel = this.dados.filter(d => d.id == id)[0];    

    this.dg.open(DepartamentoModalComponent, {
      width: '50%',
      height: "auto",
      data: {
        model: this.departamentoModel,
      }

    }).afterClosed().subscribe(res => {

      if (res != undefined) {
        let index = this.dados.findIndex(d => d.id == id);
        this.dados[index] = res.data;
        this.dsDepartamento.data = this.dados;
        this.dsDepartamento._updateChangeSubscription();
      }

    });
  }

  excluir(id: number) {
    this.dg.open(ConfirmacaoComponent, {
      disableClose: true,
      width: '35%',
      height: "auto",
      data: 'Deseja realmente excluir?'
    }).afterClosed().subscribe(res => {

      if (res) {

        this.departamentoService.Delete(id).subscribe(res => {

          if (res.success) {
            let index = this.dados.findIndex(d => d.id == id);
            this.dados.splice(index, 1);
            this.dsDepartamento.data = this.dados;
            this.dados.push();
            this.dsDepartamento._updateChangeSubscription();

            this.toastr.success('Excluido com sucesso');
          }

        }, err => {
          this.toastr.error(err);
        });

      }

    });
  }

  novo() {

    this.departamentoModel = new DepartamentoModel();

    this.dg.open(DepartamentoModalComponent, {
      width: '50%',
      height: "auto",
      data: {
        model: this.departamentoModel,
      }

    }).afterClosed().subscribe(res => {

      if (res != undefined) {
        this.dados.push(res.data);
        this.dsDepartamento.data = this.dados;
        this.dsDepartamento._updateChangeSubscription();
      }

    });
  }
  
}
