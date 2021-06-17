import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfelsetempComponent } from './ifelsetemp.component';

describe('IfelsetempComponent', () => {
  let component: IfelsetempComponent;
  let fixture: ComponentFixture<IfelsetempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfelsetempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfelsetempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
