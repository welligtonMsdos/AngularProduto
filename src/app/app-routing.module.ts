import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DepartamentoComponent } from './cadastro/departamento/departamento.component';
import { ProdutoComponent } from './cadastro/produto/produto.component';

const routes: Routes = [
  { path: 'departamento', component: DepartamentoComponent},
  { path: 'produto', component: ProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
