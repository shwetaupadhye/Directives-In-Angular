import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fortemp2Component } from './fortemp2.component';

describe('Fortemp2Component', () => {
  let component: Fortemp2Component;
  let fixture: ComponentFixture<Fortemp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fortemp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fortemp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
