import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';



import { AppComponent }  from './app.component';
import { ListMovieComponent } from './movie/list/list-movie.component';
import { ListActorComponent } from './actor/list/list-actor.component';
import { FormActorComponent } from './actor/form/form-actor.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    ListMovieComponent,
    ListActorComponent,
    FormActorComponent,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }