import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingStepTwoComponent } from './onboarding-step-two.component';

describe('OnboardingStepTwoComponent', () => {
  let component: OnboardingStepTwoComponent;
  let fixture: ComponentFixture<OnboardingStepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingStepTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
