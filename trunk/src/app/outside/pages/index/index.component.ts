import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../_core/_helpers';
import { ScriptLoaderService } from '../../../../_core/_services';


@Component({
    selector: "app-index",
    templateUrl: "./index.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class IndexComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {
        console.log("app-index");
    }
    ngAfterViewInit() {
        // this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
        //     'assets/app/js/dashboard.js');
    }

}