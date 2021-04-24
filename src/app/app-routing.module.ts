import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { LoginComponent } from '../app/components/login/login.component';
import { TemperaturaComponent} from "../app/components/temperatura/temperatura.component";


const routes: Routes = [{
  path:"login",
  component: LoginComponent 
},{
  path:"home",
  component: HomeComponent 
},{
  path:"temperatura",
  component: TemperaturaComponent 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
