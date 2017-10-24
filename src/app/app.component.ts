import {Component, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-root',
    templateUrl:'./app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {

  closeResult: string;
  
    constructor(private modalService: NgbModal) {}
  
    open(content) {
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }


  listActorSelected: boolean = false;
  listMovieSelected: boolean = false;
  homeSelected: boolean = true;
  onSelect(indice: number): void {
    if(indice==0){
      this.listActorSelected = false;
      this.listMovieSelected = false;
      this.homeSelected = true;
    }
    else if(indice == 1){
      this.listActorSelected = true;
      this.listMovieSelected = false;
      this.homeSelected = false;
    }else{
      this.listActorSelected = false;
      this.listMovieSelected = true;
      this.homeSelected = false;
    }
  }
}


