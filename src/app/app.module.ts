import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule, MatDialogModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { PlaygroundComponent } from './Home/playground/playground.component';
import { FollowersComponent } from './Home/followers/followers.component';
import { FolloweesComponent } from './Home/followees/followees.component';
import { SearchComponent } from './Home/search/search.component';
import { AnalyticsComponent } from './Home/analytics/analytics.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PlaygroundService } from './playground.service';
import { SearchService } from './search.service';
import { ConnectionService } from './connection.service';
import { SigninService } from './signin.service';
import { SignupService } from './signup.service';
import { AnalyticsService } from './analytics.service';
import { TweetsComponent } from './Home/tweets/tweets.component';
import { PersonsComponent } from './Home/persons/persons.component';;
import { ComposeComponent } from './Home/compose/compose.component';;
import { HomeComponent } from './home/home.component'



const ROUTES: Routes = [
    { path: '', component: SigninComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'playground', component: PlaygroundComponent },
    { path: 'followees', component: FolloweesComponent },
    { path: 'followers', component: FollowersComponent },
    { path: 'analytics', component: AnalyticsComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search/tweets/:tag', component: TweetsComponent },
    { path: 'search/persons/:tag', component: PersonsComponent },
    
]

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    FollowersComponent,
    FolloweesComponent,
    SearchComponent,
    AnalyticsComponent,
    SigninComponent,
    SignupComponent,
    TweetsComponent ,
    PersonsComponent ,
    ComposeComponent,
    HomeComponent,
    ],
    
    
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(ROUTES),
      FormsModule,
      ReactiveFormsModule,
      MatIconModule,
      MatToolbarModule,
      MatCardModule,
      MatDialogModule,
      BrowserAnimationsModule
  ],
  providers: [AnalyticsService, PlaygroundService, SearchService, SignupService, SigninService, ConnectionService],
  entryComponents: [ComposeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
