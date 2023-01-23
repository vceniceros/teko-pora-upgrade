import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeAreTitleComponent } from './how-we-are-title.component';

describe('HowWeAreTitleComponent', () => {
  let component: HowWeAreTitleComponent;
  let fixture: ComponentFixture<HowWeAreTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowWeAreTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowWeAreTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
