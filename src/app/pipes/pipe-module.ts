import { NgModule }      from '@angular/core';
import { BoughtForPipe } from './bought-price-pipe';
import { SoldForPipe } from './sale-price-pipe';

@NgModule({
    imports:        [],
    declarations:   [BoughtForPipe, SoldForPipe],
    exports:        [BoughtForPipe, SoldForPipe],
})

export class PipeModule {

  static forRoot() {
     return {
         ngModule: PipeModule,
         providers: [],
     };
  }
} 