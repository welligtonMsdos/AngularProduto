import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ProdutoModalComponent } from './produto-modal/produto-modal.component';
import { ProdutoModel } from './produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtoModel = new ProdutoModel();

  constructor(private dg: MatDialog,
    private toastr: ToastrService) { }

  ngOnInit(): void {
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
        // this.dados.push(res.data);
        // this.dsDepartamento.data = this.dados;
        // this.dsDepartamento._updateChangeSubscription();
      }

    });
  }

  changeFn(e: any) {
    console.log(e.target.value);
  }

}
