import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortempComponent } from './fortemp.component';

describe('FortempComponent', () => {
  let component: FortempComponent;
  let fixture: ComponentFixture<FortempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
