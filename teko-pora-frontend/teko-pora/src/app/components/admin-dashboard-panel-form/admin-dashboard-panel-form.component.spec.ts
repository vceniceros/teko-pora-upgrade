import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardPanelFormComponent } from './admin-dashboard-panel-form.component';

describe('AdminDashboardPanelFormComponent', () => {
  let component: AdminDashboardPanelFormComponent;
  let fixture: ComponentFixture<AdminDashboardPanelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardPanelFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardPanelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
