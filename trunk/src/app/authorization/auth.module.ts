import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.routing';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from '../../_shared/_guards/auth.guard';
import {
  AlertService,
  AuthenticationService,
  UserService
} from '../../_shared/_services';
import { FakeDB } from '../../_test/mocking-data/index';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ImMaterialModule } from '../../_shared/shared.module';

import { LocaleComponent } from './locale/locale.component';
import { ApiService } from '../../_core/_services';

export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  declarations: [LoginComponent, LogoutComponent, LocaleComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AuthRoutingModule,
    // LaddaModule,
    RouterModule,
    ImMaterialModule,

    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ,
    ApiService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,

    // api backend simulation
    // fakeBackendProvider,

    BaseRequestOptions,
    FakeDB,
    MockBackend
  ],
  entryComponents: []
})
export class AuthModule {}
