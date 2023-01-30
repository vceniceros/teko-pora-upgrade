import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardTitleComponent } from './admin-dashboard-title.component';

describe('AdminDashboardTitleComponent', () => {
  let component: AdminDashboardTitleComponent;
  let fixture: ComponentFixture<AdminDashboardTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
