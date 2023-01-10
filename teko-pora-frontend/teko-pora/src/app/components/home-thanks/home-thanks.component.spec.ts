import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeThanksComponent } from './home-thanks.component';

describe('HomeThanksComponent', () => {
  let component: HomeThanksComponent;
  let fixture: ComponentFixture<HomeThanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeThanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
