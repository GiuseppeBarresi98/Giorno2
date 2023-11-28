import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostAttviComponent } from './components/post-attvi/post-attvi.component';
import { PostNonattiviComponent } from './components/post-nonattivi/post-nonattivi.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'active-posts',
    component: PostAttviComponent,
  },
  {
    path: 'inactive-posts',
    component: PostNonattiviComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PostAttviComponent,
    PostNonattiviComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
