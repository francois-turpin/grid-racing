import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding-step-two',
  templateUrl: './onboarding-step-two.component.html',
  styleUrls: ['./onboarding-step-two.component.scss']
})
export class OnboardingStepTwoComponent implements OnInit {

  selectedType = 1;

  constructor() { }

  ngOnInit(): void {
  }

  setActive(index: number) {
    this.selectedType = index;
  }
}
