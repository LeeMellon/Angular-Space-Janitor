import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Room000Component } from './room000/room000.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { LogComponent } from './log/log.component';
import { PlayerComponent } from './player/player.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './services/auth-guard.service.service'

const appRoutes: Routes = [
  {
  path: '',
  component: FrontPageComponent
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
  path: 'create',
  component: SignUpComponent
  },
  {
  path: 'rooms/:dest',
  component: Room000Component,
  canActivate: [AuthGuard]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
