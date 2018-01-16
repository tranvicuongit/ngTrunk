import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index.component';
import { ListPatientComponent } from '../management/list-patient/list-patient.component'


const routes: Routes = [
    {
        "path": "main-board",
        "component": IndexComponent
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes)
    ], exports: [
        RouterModule,
        ListPatientComponent
    ], declarations: [
        IndexComponent,
        ListPatientComponent
    ]
})
export class IndexModule {
}