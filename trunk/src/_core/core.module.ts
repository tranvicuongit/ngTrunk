import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HttpModule } from '@angular/http';

import { ApiService, ScriptLoaderService } from './_services';

@NgModule({
  imports: [CommonModule, HttpModule],
  declarations: [CoreComponent],
  providers: [ ApiService, ScriptLoaderService]
})
export class CoreModule {}
