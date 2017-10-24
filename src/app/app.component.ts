import {Component, Input} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
    <h4 *ngIf="type == 'actor'" class="modal-title">Formulaire acteur</h4>
    <h4 *ngIf="type == 'movie'" class="modal-title">Formulaire film</h4>

      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form-actor-root id="1" *ngIf="type == 'actor'"></form-actor-root>
      <form-movie-root id="2" *ngIf="type == 'movie'"></form-movie-root>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() type;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
    selector: 'app-root',
    templateUrl:'./app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private modalService: NgbModal) {}
  
  open(type) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.type = type;
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


