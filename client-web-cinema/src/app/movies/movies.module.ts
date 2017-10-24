import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesComponent } from './movies.component';

@NgModule({
  declarations: [ MoviesComponent ],
  exports: [ MoviesComponent ],
  imports: [ CommonModule ]
})
export class MoviesModule {}