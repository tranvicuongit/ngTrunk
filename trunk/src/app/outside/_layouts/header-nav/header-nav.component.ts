import { Component, OnInit, ViewEncapsulation, AfterViewInit } from "@angular/core";
import { Helpers } from "../../../../_core/_helpers";
import { MasterService }  from "../../../../_shared/_services/master.service";

@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    styleUrls: ["./header-nav.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class HeaderNavComponent implements OnInit, AfterViewInit {
    constructor( private _matSer : MasterService) { }
    ngOnInit() { 
        console.log("HeaderNavComponent")
    }
    ngAfterViewInit() {
        // mLayout.initHeader();
        //console.log(this._matSer.sidenav);
    }

    toggleNav(){
        this._matSer.sidenav.toggle();
    }
}
