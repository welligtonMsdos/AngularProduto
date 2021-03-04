import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ProdutoModalComponent } from './produto-modal/produto-modal.component';
import { ProdutoModel } from './models/produto.model';
import { ProdutoService } from './produto.service';
import { ConfirmacaoComponent } from 'src/app/shared/components/confirmacao/confirmacao.component';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtoModel = new ProdutoModel();
  dados: ProdutoModel[] = [];
  dsProduto = new MatTableDataSource([this.produtoModel]);

  displayedColumns: string[] = ['descricao','preco','estoque','departamento', 'editar', 'excluir'];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort; 

  constructor(private dg: MatDialog,
    private produtoService: ProdutoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.dsProduto.paginator = this.paginator;
    this.dsProduto.sort = this.sort;

    this.GetAll();
  }

  applyFilter(filterValue: string){
    this.dsProduto.filter = filterValue.trim().toLocaleLowerCase();

    if(this.dsProduto.paginator){
      this.dsProduto.paginator.firstPage();
    }
  }

  GetAll() {
    this.produtoService.GetAll().subscribe(res => {

      if (res.success) {
        this.dados = res.data;
        this.dsProduto.data = this.dados;        
      }

    }, err => {
      console.error(err);
    });
  }

  novo(){
    this.produtoModel = new ProdutoModel();

    this.dg.open(ProdutoModalComponent, {
      width: '50%',
      height: "auto",
      data: {
        model: this.produtoModel,
      }

    }).afterClosed().subscribe(res => {

      if (res != undefined) {
        this.dados.push(res.data);
        this.dsProduto.data = this.dados;
        this.dsProduto._updateChangeSubscription();
      }

    });
  }

  editar(id: number) {

    this.produtoModel = new ProdutoModel();
    this.produtoModel = this.dados.filter(d => d.id == id)[0];   

    this.dg.open(ProdutoModalComponent, {
      width: '50%',
      height: "auto",
      data: {
        model: this.produtoModel,
      }

    }).afterClosed().subscribe(res => {

      if (res != undefined) {
        let index = this.dados.findIndex(d => d.id == id);
        this.dados[index] = res.data;
        this.dsProduto.data = this.dados;
        this.dsProduto._updateChangeSubscription();
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
        this.produtoService.Delete(id).subscribe(res=>{

          if(res.success){
            let index = this.dados.findIndex(d => d.id == id);
            this.dados.splice(index, 1);
            this.dsProduto.data = this.dados;
            this.dados.push();
            this.dsProduto._updateChangeSubscription();

            this.toastr.success('Excluido com sucesso');
          }

        }, err=>{
          this.toastr.error(err);
        });
      }
    });
  }

}
