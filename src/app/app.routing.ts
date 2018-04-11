import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Room000Component } from './room000/room000.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { LogComponent } from './log/log.component';
import { PlayerComponent } from './player/player.component';

const appRoutes: Routes = [
  {
  path: '',
  component: FrontPageComponent
  },
  {
  path: 'rooms/:dest',
  component: Room000Component
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
