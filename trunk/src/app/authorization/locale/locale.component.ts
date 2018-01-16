import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
// import { ScriptLoaderService } from '../../../_core/_services/script-loader.service';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

// declare var $ : any;

@Component({
    selector: 'app-locale',
    templateUrl: './locale.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class LocaleComponent implements OnInit, AfterViewInit {

    translate: TranslateService; // <-- defining translate as a private property
    cookieService: CookieService;
    localeID = '';

    constructor(cookieService: CookieService, translate: TranslateService) {
        this.translate = translate;
        this.cookieService = cookieService;

        this.localeID = cookieService.get('locale') || 'vi';
        translate.setDefaultLang(this.localeID);
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        // this._script.loadScripts('app-locale',
        //     ['assets/custom/components/auth/locale.js']);
    }

    switchLanguage = () => {  // <-- creating a new method
        const lang = this.localeID;
        // Set cookie language
        this.translate.use(lang); // <-- invoking `use()`
        this.cookieService.set('locale', lang);
    }

}
