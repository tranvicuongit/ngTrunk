import { NgModule } from '@angular/core';
import { OutsideComponent } from './outside.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../_shared/_guards';
import { AsideNavComponent } from './_layouts/aside-nav/aside-nav.component';
import { FooterComponent } from './_layouts/footer/footer.component';
import { HeaderNavComponent } from './_layouts/header-nav/header-nav.component';

const routes: Routes = [
  {
    path: '',
    component: OutsideComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'main-board',
        loadChildren: './pages/index/index.module#IndexModule'
      },
      {
        path: '404',
        loadChildren: './pages/not-found/not-found.module#NotFoundModule'
      },
      {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class OutsideRoutingModule {}
