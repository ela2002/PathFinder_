import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLandingPagesComponent } from './all-landing-pages.component';

describe('AllLandingPagesComponent', () => {
  let component: AllLandingPagesComponent;
  let fixture: ComponentFixture<AllLandingPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLandingPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLandingPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
