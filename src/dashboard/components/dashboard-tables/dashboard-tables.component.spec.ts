import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTablesComponent } from './dashboard-tables.component';

describe('DashboardTablesComponent', () => {
  let component: DashboardTablesComponent;
  let fixture: ComponentFixture<DashboardTablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardTablesComponent]
    });
    fixture = TestBed.createComponent(DashboardTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
