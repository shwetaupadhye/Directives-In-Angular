import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideandshowComponent } from './hideandshow.component';

describe('HideandshowComponent', () => {
  let component: HideandshowComponent;
  let fixture: ComponentFixture<HideandshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HideandshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HideandshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
