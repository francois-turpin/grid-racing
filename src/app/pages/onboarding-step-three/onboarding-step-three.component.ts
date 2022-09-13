import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding-step-three',
  templateUrl: './onboarding-step-three.component.html',
  styleUrls: ['./onboarding-step-three.component.scss']
})
export class OnboardingStepThreeComponent implements OnInit {

  selectedType = 1;


  constructor() { }

  ngOnInit(): void {
  }

  setActive(index: number) {
    this.selectedType = index;
  }

}
