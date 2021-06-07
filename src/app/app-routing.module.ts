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
  },
  {
    path: 'humedad',
    component: HumedadComponent,
  },
  {
    path: 'temp-agua',
    component: TempAguaComponent,
  },
  {
    path: 'ventilador',
    component: VentiladorComponent,
  },
  {
    path: 'estatus-general',
    component: EstatusGeneralComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
