import { Injectable } from '@angular/core';
import { ApiService } from '../../_core/_services';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../_models/user';
import { Global } from '../../_core/_enum/global.enum';

@Injectable()
export class UserService {
    private currentToken: string;
    private currentRefreshToken: string;
    constructor(private http: ApiService,
        private _router: Router, ) { }

    current() {
        const currentUser = <User>JSON.parse(
            localStorage.getItem(Global.SESSION_KEY)
        );
        return currentUser;
    }

    setCurrent(_user) {
        localStorage.setItem(Global.SESSION_KEY, JSON.stringify(_user));
    }

    verify() {
      const _current = this.current();
        return _current !== null && _current !== undefined;
    }
    loggined() {
        const _current = this.current();
        return _current !== null && _current !== undefined;
    }

    logout() {
        localStorage.removeItem(Global.SESSION_KEY);
    }

    refreshToken() {
        console.log(this.current());
    }

    refuse(__url) {
        this._router.navigate([__url != null && __url !== undefined ? __url : '']);
    }
}
