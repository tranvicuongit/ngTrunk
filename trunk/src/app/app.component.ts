import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { ScriptLoaderService } from '../_core/_services';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../_shared/_services';
import { Global } from '../_core/_enum/global.enum';
import { Helpers } from '../_core/_helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  __interval: any;
  constructor(
    private _router: Router,
    cookieService: CookieService,
    private _user: UserService,
    translate: TranslateService
  ) {
    const localeID = cookieService.get('locale') || 'vi';
    translate.setDefaultLang(localeID);
  }

  ngOnInit() {
    this._router.events.subscribe(route => {
      if (route instanceof NavigationStart) {
        Helpers.setLoading(true);
      }
      if (route instanceof NavigationEnd) {
        Helpers.setLoading(false);
      }
    });

    this.__interval = setInterval(() => {
      this._user.refreshToken();
    }, Global.REFRESH_TIME * 60000);
  }
  ngDestroy() {
    if (this.__interval) {
      clearInterval(this.__interval);
    }
  }

}
