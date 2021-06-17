import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switchtemp2Component } from './switchtemp2.component';

describe('Switchtemp2Component', () => {
  let component: Switchtemp2Component;
  let fixture: ComponentFixture<Switchtemp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Switchtemp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Switchtemp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
