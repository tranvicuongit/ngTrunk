import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  AfterViewChecked,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AuthenticationService,
  AlertService
} from '../../../_shared/_services';
import { UserService } from '../../../_shared/_services/user.service';
import { LoginCustom } from './../_helpers/login-custom';
import { Helpers } from '../../../_core/_helpers';
import { TranslateService } from '@ngx-translate/core';
import { Global } from '../../../_core/_enum/global.enum';

declare var swal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  param: any = { value: 'Admin' };
  globalBodyClass = 'login';
  globalBodyClassFinish = 'login-success';
  lblError = '';

  // @ViewChild('alertSignin', { read: ViewContainerRef })
  // alertSignin: ViewContainerRef;
  // @ViewChild('alertSignup', { read: ViewContainerRef })
  // alertSignup: ViewContainerRef;
  // @ViewChild('alertForgotPass', { read: ViewContainerRef })
  // alertForgotPass: ViewContainerRef;

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _authService: AuthenticationService,
    private _alertService: AlertService,
    private cfr: ComponentFactoryResolver,
    private cfd: ChangeDetectorRef,
    translate: TranslateService
  ) {}

  ngOnInit() {
    if (!this._userService.verify()) {
      this.model.remember = true;

      //Demo
      this.model.username = 'demo@demo.com';
      this.model.password = 'demo';

      // get return url from route parameters or default to '/'
      this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';

      //this._router.navigate([this.returnUrl]);

      // this._script
      //     .loadScripts(
      //     'body',
      //     [
      //         'assets/core/vendors/base/vendors.bundle.js',
      //         'assets/core/main/base/scripts.bundle.js'
      //     ],
      //     true
      //     )
      //     .then(() => {
      //         //Helpers.setLoading(false);
      //         //Helpers.addBodyClass(this.globalBodyClass);
      //         LoginCustom.init();
      //     });
    } else {
      this._router.navigate(['']);
    }
  }

  // ngAfterViewChecked() {
  //     this.cfd.detectChanges();
  // }

  signin() {
    this.loading = true;
    this.lblError = '';
    this._authService.login(this.model.username, this.model.password).subscribe(
      data => {
        // Helpers.setLoading(true);
        // Helpers.addBodyClass(this.globalBodyClassFinish);

        const user = data;
        if (user && user.token) {
          this._userService.setCurrent(user);
          this._router.navigate([this.returnUrl]);
        } else {
          this._userService.logout();
          this._userService.refuse('');
        }
      },
      error => {
        this.showAlert('alertSignin', error);
      }
    );
  }

  showAlert(target, text) {
    this.loading = false;
    this.lblError = text;
  }
}
