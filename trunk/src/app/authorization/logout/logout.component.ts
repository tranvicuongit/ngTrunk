import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from '../../../_core/_enum/global.enum';
import { Helpers } from '../../../_core/_helpers';
import { UserService } from '../../../_shared/_services/user.service';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class LogoutComponent implements OnInit {

    constructor(private _router: Router,
        private _authService: UserService) {
    }

    ngOnInit(): void {
        Helpers.setLoading(true);
        this._authService.logout();
        this._router.navigate([Global.SIGN_IN]);
    }
}
