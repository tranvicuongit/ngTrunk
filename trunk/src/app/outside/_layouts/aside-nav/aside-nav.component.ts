import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { Helpers } from '../../../../_core/_helpers';
import { MasterService } from '../../../../_shared/_services/master.service';

// declare let mLayout: any;
@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AsideNavComponent implements OnInit, AfterViewInit {
  constructor(private _matSer: MasterService) {}
  ngOnInit() {}
  ngAfterViewInit() {}
}
