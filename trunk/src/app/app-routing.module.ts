import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './authorization/logout/logout.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './authorization/auth.module#AuthModule'
  },
  {
    path: '**',
    loadChildren: './outside/outside.module#OutsideModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
