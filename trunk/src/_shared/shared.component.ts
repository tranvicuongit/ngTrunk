import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shared',
    template: `
   <p>
  		shared Works!
   </p>
  `,
    styles: []
})
export class SharedComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
