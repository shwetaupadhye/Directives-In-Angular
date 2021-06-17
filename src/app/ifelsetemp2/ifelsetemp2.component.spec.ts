import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ifelsetemp2Component } from './ifelsetemp2.component';

describe('Ifelsetemp2Component', () => {
  let component: Ifelsetemp2Component;
  let fixture: ComponentFixture<Ifelsetemp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ifelsetemp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ifelsetemp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
