import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Helpers } from '../../_core/_helpers';
// import { ScriptLoaderService } from '../../_core/_services/script-loader.service';
import { MasterService } from '../../_shared/_services';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ImMaterialModule } from '../../_shared/shared.module';

declare let mApp: any;
declare let mUtil: any;
declare let mLayout: any;
@Component({
    selector: 'app-outside',
    templateUrl: './outside.component.html',
    styleUrls: ['./outside.component.scss']
})
export class OutsideComponent implements OnInit {
    @ViewChild('mainNav') public sideNav: any;

    constructor(private _router: Router, private _masterServ: MasterService) { }
    ngOnInit() {
      this._masterServ.sidenav = this.sideNav;
        this._router.events.subscribe((route) => {
            if (route instanceof NavigationStart) {
                // (<any>mLayout).closeMobileAsideMenuOffcanvas();
                // (<any>mLayout).closeMobileHorMenuOffcanvas();
                // (<any>mApp).scrollTop();
                //Helpers.setLoading(true);
                // // hide visible popover
                // (<any>$('[data-toggle='m-popover']')).popover('hide');
            }
            if (route instanceof NavigationEnd) {
                // init required js
                // (<any>mApp).init();
                // (<any>mUtil).init();
                //Helpers.setLoading(false);
                // content m-wrapper animation
                // let animation = 'm-animate-fade-in-up';
                // $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
                //     $('.m-wrapper').removeClass(animation);
                // }).removeClass(animation).addClass(animation);
            }
        });
    }
}
