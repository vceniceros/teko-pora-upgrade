import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePrestationsComponent } from './home-prestations.component';

describe('HomePrestationsComponent', () => {
  let component: HomePrestationsComponent;
  let fixture: ComponentFixture<HomePrestationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePrestationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePrestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
