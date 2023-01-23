import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeAreBodyComponent } from './how-we-are-body.component';

describe('HowWeAreBodyComponent', () => {
  let component: HowWeAreBodyComponent;
  let fixture: ComponentFixture<HowWeAreBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowWeAreBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowWeAreBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
