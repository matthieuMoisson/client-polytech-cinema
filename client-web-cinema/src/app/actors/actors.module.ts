import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorsComponent } from './actors.component';

@NgModule({
  declarations: [ ActorsComponent ],
  exports: [ ActorsComponent ],
  imports: [ CommonModule ]
})
export class ActorsModule {}