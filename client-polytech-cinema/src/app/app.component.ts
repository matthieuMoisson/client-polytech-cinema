import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl:'./app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {
  listActorSelected: boolean = false;
  listMovieSelected: boolean = false;
  onSelect(indice: number): void {
    if(indice==0){
      this.listActorSelected = false;
      this.listMovieSelected = false;
    }
    else if(indice == 1){
      this.listActorSelected = true;
      this.listMovieSelected = false;
    }else{
      this.listActorSelected = false;
      this.listMovieSelected = true;
    }
  }
}


