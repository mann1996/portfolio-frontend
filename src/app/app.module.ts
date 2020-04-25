import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faGlobeAmericas,
  faNewspaper,
  faUserCircle,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { DiscoverComponent } from './discover/discover.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SubscriptionComponent } from './subscription/subscription.component';

@NgModule({
  declarations: [AppComponent, DiscoverComponent, LoginComponent, ProfileComponent, SubscriptionComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faGlobeAmericas, faNewspaper, faUserCircle, faSearch);
  }
}
