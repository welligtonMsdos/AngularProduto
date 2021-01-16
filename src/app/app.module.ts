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
import { DepartamentoModalComponent } from './cadastro/departamento/departamento-modal/departamento-modal.component';
import { MatDialogModule, MatDialogRef  } from '@angular/material/dialog';
import { ConfirmacaoComponent } from './shared/components/confirmacao/confirmacao.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MenuLeftComponent } from './core/menu-left/menu-left.component';
import { MatMenuModule } from '@angular/material/menu';
import { DepartamentoTableModalComponent } from './shared/components/departamento-table-modal/departamento-table-modal.component';
import { ProdutoModalComponent } from './cadastro/produto/produto-modal/produto-modal.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentoComponent,
    ProdutoComponent,
    DepartamentoModalComponent,
    ConfirmacaoComponent,
    MenuLeftComponent,
    DepartamentoTableModalComponent,
    ProdutoModalComponent,    
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
    MatDialogModule,
    MatFormFieldModule,  
    FormsModule,  
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatMenuModule,  
    MatSelectModule,   
  ],
  exports: [
    MatDialogModule,    
  ],
  entryComponents: [
    DepartamentoModalComponent,
    ConfirmacaoComponent,
    ProdutoModalComponent,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
