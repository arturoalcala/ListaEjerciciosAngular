import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplosW3schoolsComponent } from './ejemplos-w3schools.component';

describe('EjemplosW3schoolsComponent', () => {
  let component: EjemplosW3schoolsComponent;
  let fixture: ComponentFixture<EjemplosW3schoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemplosW3schoolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemplosW3schoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
