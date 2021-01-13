import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private departamentoService: DepartamentoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.GetAll();

  }

  GetAll() {
    this.departamentoService.GetAll().subscribe(res => {

      if (res.success) {
        console.log(res);

        this.dados = res.data;
        this.dsDepartamento.data = this.dados;
      }

    }, err => {
      console.error(err);
    });
  }

  editar(id: number) {
    this.toastr.warning(id.toString());
  }

  excluir(id: number) {
    this.toastr.info(id.toString());
  }

  novo() {
    this.toastr.success('Salvo com sucesso!');
  }

}
