import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OurcompanyComponent } from './ourcompany/ourcompany.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployedataComponent } from './employedata/employedata.component';
import { CountrydataComponent } from './countrydata/countrydata.component';
import { PiclibrayComponent } from './piclibray/piclibray.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OurcompanyComponent,
    ContactComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    EmployedataComponent,
    CountrydataComponent,
    PiclibrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
