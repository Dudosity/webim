import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import { AppComponent } from './app.component';
import { VKauthComponent } from './vkauth/vkauth.component';
import { RouterModule, Routes } from '@angular/router';
import {Router} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: ':', component: VKauthComponent },
  { path: 'heroes', component: VKauthComponent },
  { path: '**', component: VKauthComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VKauthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
