import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchtempComponent } from './switchtemp.component';

describe('SwitchtempComponent', () => {
  let component: SwitchtempComponent;
  let fixture: ComponentFixture<SwitchtempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchtempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchtempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
