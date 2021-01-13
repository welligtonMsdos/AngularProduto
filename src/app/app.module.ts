import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DepartamentoComponent } from './cadastro/departamento/departamento.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProdutoComponent } from './cadastro/produto/produto.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentoComponent,
    ProdutoComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule, 
    HttpClientModule,   
    ToastrModule.forRoot({ timeOut: 3000 }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
