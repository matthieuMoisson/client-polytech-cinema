import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalContent } from './ngbd-modal-content';

import { AppComponent }  from './app.component';

import { ListMovieComponent } from './movie/list/list-movie.component';
import { FormMovieComponent } from './movie/form/form-movie.component';
import { VueMovieComponent } from './movie/vue/vue-movie.component';
import { VueActorComponent } from './actor/vue/vue-actor.component';
import { VueDirectorComponent } from './director/vue/vue-director.component';

import { ListActorComponent } from './actor/list/list-actor.component';
import { FormActorComponent } from './actor/form/form-actor.component';

import { ListDirectorComponent } from './director/list/list-director.component';
import { FormDirectorComponent } from './director/form/form-director.component';

import { ListCharacterComponent } from './character/list/list-character.component';
import { FormCharacterComponent } from './character/form/form-character.component';

import { ListCategoryComponent } from './category/list/list-category.component';
import { FormCategoryComponent } from './category/form/form-category.component';

import { filterMovie, filterByActor, filterByDirector, filterByCategory, filterByCharacter } from './pipes/pipes';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    NgbdModalContent,

    VueMovieComponent, VueActorComponent, VueDirectorComponent,

    ListMovieComponent,
    FormMovieComponent,

    ListActorComponent,
    FormActorComponent,

    ListDirectorComponent,
    FormDirectorComponent,

    ListCharacterComponent,
    FormCharacterComponent,

    ListCategoryComponent,
    FormCategoryComponent,

    filterMovie, filterByActor, filterByDirector, filterByCategory, filterByCharacter
  ],
  providers: [ ],
  bootstrap: [ AppComponent ],
  entryComponents:[ NgbdModalContent, VueMovieComponent, VueActorComponent, VueDirectorComponent]
})
export class AppModule { }