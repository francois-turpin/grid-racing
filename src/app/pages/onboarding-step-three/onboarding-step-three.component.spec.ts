import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingStepThreeComponent } from './onboarding-step-three.component';

describe('OnboardingStepThreeComponent', () => {
  let component: OnboardingStepThreeComponent;
  let fixture: ComponentFixture<OnboardingStepThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingStepThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
