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
  faInfoCircle,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faLinkedin,
  faGithubSquare,
  faYoutubeSquare,
  faSoundcloud,
  faFlickr,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { DiscoverComponent } from './discover/discover.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { RegisterComponent } from './register/register.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DiscoverComponent,
    LoginComponent,
    ProfileComponent,
    SubscriptionComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(
      faGlobeAmericas,
      faNewspaper,
      faUserCircle,
      faSearch,
      faInfoCircle,
      faMapMarkerAlt,
      faFacebookSquare,
      faTwitterSquare,
      faInstagramSquare,
      faLinkedin,
      faGithubSquare,
      faYoutubeSquare,
      faSoundcloud,
      faFlickr,
      faTelegram
    );
  }
}
