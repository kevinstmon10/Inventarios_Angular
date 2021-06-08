import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { LoginComponent } from '../app/components/login/login.component';
import { TemperaturaComponent } from '../app/components/temperatura/temperatura.component';
import { HumedadComponent } from '../app/components/humedad/humedad.component';
import { TempAguaComponent } from '../app/components/temp-agua/temp-agua.component';
import { VentiladorComponent } from '../app/components/ventilador/ventilador.component';
import { EstatusGeneralComponent } from '../app/components/estatus-general/estatus-general.component';
import { GuardService } from './services/guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [GuardService],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [GuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login/:logout',
    component: LoginComponent,
  },
  {
    path: 'temperatura',
    component: TemperaturaComponent,
    canActivate: [GuardService],
  },
  {
    path: 'humedad',
    component: HumedadComponent,
    canActivate: [GuardService],
  },
  {
    path: 'temp-agua',
    component: TempAguaComponent,
    canActivate: [GuardService],
  },
  {
    path: 'ventilador',
    component: VentiladorComponent,
    canActivate: [GuardService],
  },
  {
    path: 'estatus-general',
    component: EstatusGeneralComponent,
    canActivate: [GuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
