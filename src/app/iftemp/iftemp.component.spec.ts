import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IftempComponent } from './iftemp.component';

describe('IftempComponent', () => {
  let component: IftempComponent;
  let fixture: ComponentFixture<IftempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IftempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IftempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
