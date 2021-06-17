import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switchtemp3Component } from './switchtemp3.component';

describe('Switchtemp3Component', () => {
  let component: Switchtemp3Component;
  let fixture: ComponentFixture<Switchtemp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Switchtemp3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Switchtemp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
