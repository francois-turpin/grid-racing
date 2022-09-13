import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OnboardingStepOneComponent } from './pages/onboarding-step-one/onboarding-step-one.component';
import { OnboardingStepTwoComponent } from './pages/onboarding-step-two/onboarding-step-two.component';
import { OnboardingStepThreeComponent } from './pages/onboarding-step-three/onboarding-step-three.component';

const appRoutes: Routes = [
  {
    path: 'onboarding-step-three',
    component: OnboardingStepThreeComponent,
    data: { title: 'Step Three' },
  },
  {
    path: 'onboarding-step-two',
    component: OnboardingStepTwoComponent,
    data: { title: 'Step Two' },
  },
  {
    path: 'onboarding-step-one',
    component: OnboardingStepOneComponent,
    data: { title: 'Step One' },
  },
  { path: '', redirectTo: '/onboarding-step-one', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [AppComponent, OnboardingStepOneComponent, OnboardingStepTwoComponent, OnboardingStepThreeComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
