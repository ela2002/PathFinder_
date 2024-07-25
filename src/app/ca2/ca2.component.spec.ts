import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ca2Component } from './ca2.component';

describe('Ca2Component', () => {
  let component: Ca2Component;
  let fixture: ComponentFixture<Ca2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ca2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ca2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
