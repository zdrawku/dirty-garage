import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { PolishInfoComponent } from './polish-info/polish-info.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { PricesComponent } from './prices/prices.component';

export const routes: Routes = [
  { path: '', redirectTo: 'general-info', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'general-info', component: GeneralInfoComponent, data: { text: 'General-Info' } },
  { path: 'polish-info', component: PolishInfoComponent, data: { text: 'Polish-Info' } },
  { path: 'who-we-are', component: WhoWeAreComponent, data: { text: 'Who-We-Are' } },
  { path: 'contact-information', component: ContactInformationComponent, data: { text: 'Contact-Information' } },
  { path: 'terms-of-use', component: TermsOfUseComponent, data: { text: 'Terms-Of-Use' } },
  { path: 'scheduler', component: SchedulerComponent, data: { text: 'Scheduler' } },
  { path: 'prices', component: PricesComponent, data: { text: 'Prices' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
