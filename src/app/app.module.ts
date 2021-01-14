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
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmacaoComponent } from './shared/components/confirmacao/confirmacao.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentoComponent,
    ProdutoComponent,
    DepartamentoModalComponent,
    ConfirmacaoComponent,    
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
    FlexLayoutModule
  ],
  exports: [
    MatDialogModule,   
  ],
  entryComponents: [
    DepartamentoModalComponent,
    ConfirmacaoComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
