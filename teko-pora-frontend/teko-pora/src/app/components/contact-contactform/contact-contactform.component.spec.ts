import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactContactformComponent } from './contact-contactform.component';

describe('ContactContactformComponent', () => {
  let component: ContactContactformComponent;
  let fixture: ComponentFixture<ContactContactformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactContactformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactContactformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
