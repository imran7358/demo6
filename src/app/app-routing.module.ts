import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent}  from './home/home.component';
import {AboutComponent} from './about/about.component';
import {OurcompanyComponent} from './ourcompany/ourcompany.component';
import {ContactComponent} from './contact/contact.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { format } from 'url';
import { from } from 'rxjs';
import { EmployedataComponent } from './employedata/employedata.component';
import { CountrydataComponent } from './countrydata/countrydata.component';
import { PiclibrayComponent } from './piclibray/piclibray.component';
const routes: Routes = [
  {path:'', component:HomeComponent,pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'About', component:AboutComponent},
  {path:'ourCompany', component:OurcompanyComponent},
  {path:'contact', component:ContactComponent},
  {path:'employeedata', component:EmployedataComponent},
  {path:'countrydata', component:CountrydataComponent},
  {path:'piclibrary', component:PiclibrayComponent},
  {path:'PageNotFound', component:PageNotFoundComponent},
  {path:'**', component:PageNotFoundComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
