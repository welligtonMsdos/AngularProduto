import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DepartamentoTableModalComponent } from './shared/components/departamento-table-modal/departamento-table-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetoAngular';

  constructor(private dg: MatDialog,
    ) { }

  openDepartamento(){
    this.dg.open(DepartamentoTableModalComponent, {
      width: '50%',
      height: "auto",
      data: {       
      }

    }).afterClosed().subscribe(res => {     

    });
  }
}
