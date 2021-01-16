import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoTableModalComponent } from './departamento-table-modal.component';

describe('DepartamentoTableModalComponent', () => {
  let component: DepartamentoTableModalComponent;
  let fixture: ComponentFixture<DepartamentoTableModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentoTableModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoTableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
