import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OutsideComponent } from './outside.component';
import { HeaderNavComponent } from './_layouts/header-nav/header-nav.component';
import { AsideNavComponent } from './_layouts/aside-nav/aside-nav.component';
import { FooterComponent } from './_layouts/footer/footer.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OutsideRoutingModule } from './outside-routing.module';

import { ImMaterialModule } from '../../_shared/shared.module';
import { MasterService, UserService } from '../../_shared/_services/index';
import { AuthGuard } from '../../_shared/_guards';

import 'hammerjs';

@NgModule({
  declarations: [
    OutsideComponent,
    HeaderNavComponent,
    AsideNavComponent,
    FooterComponent
  ],
  exports: [
    OutsideComponent,
    HeaderNavComponent,
    AsideNavComponent,
    FooterComponent
  ],
  providers: [MasterService, AuthGuard, UserService],
  imports: [CommonModule, RouterModule, ImMaterialModule, OutsideRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OutsideModule {}
