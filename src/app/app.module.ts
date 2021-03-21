import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ImageItemComponent } from './components/image-item/image-item.component';
import { LikesImagesComponent } from './components/likes-images/likes-images.component';
import { FotterComponent } from './components/fotter/fotter.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NotFountComponent } from './components/not-fount/not-fount.component';


const appRoutes: Routes = [
  { path: '', component: ImageListComponent},
  { path: 'bookmarks', component: LikesImagesComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: '**', component: NotFountComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSideComponent,
    SearchFieldComponent,
    ImageListComponent,
    ImageItemComponent,
    LikesImagesComponent,
    FotterComponent,
    LoaderComponent,
    PaginationComponent,
    SignInComponent,
    NotFountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes),
    SocialLoginModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '160629726895-c6r717pirnce5v0cckrtpbhcqdsps9al.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
