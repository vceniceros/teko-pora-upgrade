import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardUpdateProjectComponent } from './admin-dashboard-update-project.component';

describe('AdminDashboardUpdateProjectComponent', () => {
  let component: AdminDashboardUpdateProjectComponent;
  let fixture: ComponentFixture<AdminDashboardUpdateProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardUpdateProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardUpdateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
