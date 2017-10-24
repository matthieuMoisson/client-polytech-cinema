import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { ListMovieComponent } from './movie/list/list-movie.component';
import { ListActorComponent } from './actor/list/list-actor.component';
import { FormActorComponent } from './actor/form/form-actor.component';
import { FormMovieComponent } from './movie/form/form-movie.component';
import {NgbdModalContent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    ListMovieComponent,
    ListActorComponent,
    FormActorComponent,
    FormMovieComponent,
    NgbdModalContent
  ],
  providers: [ ],
  bootstrap: [ AppComponent ],
  entryComponents:[ NgbdModalContent]
})
export class AppModule { }