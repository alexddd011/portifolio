import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './components/home/about/about.component';
import { TecthComponent } from './components/home/tecth/tecth.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectComponent } from './components/project/project.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    NavbarComponent,
    AboutComponent,
    TecthComponent,
    ContactComponent,
    ProjectComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
