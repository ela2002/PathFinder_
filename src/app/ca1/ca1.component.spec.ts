import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ca1Component } from './ca1.component';

describe('Ca1Component', () => {
  let component: Ca1Component;
  let fixture: ComponentFixture<Ca1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ca1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ca1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
