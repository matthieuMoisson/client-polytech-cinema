import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalContent } from './ngbd-modal-content';

@Component({
    selector: 'app-root',
    templateUrl:'./app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent{

  constructor(private modalService: NgbModal) {}
  

  open(type) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.type = type;
    modalRef.componentInstance.id = 0;
  }

  listActorSelected: boolean = false;
  listMovieSelected: boolean = false;
  listDirectorSelected: boolean = false;
  listCharacterSelected: boolean = false;
  listCategorySelected: boolean = false;
  homeSelected: boolean = true;

  /* cette partie permet de determiner quel page on affiche en fonction du choix dans le menu pourrai être remplacer par du routing */
  onSelect(indice: string): void {
    if(indice == "home"){
      this.listActorSelected = false;
      this.listMovieSelected = false;
      this.listDirectorSelected = false;
      this.listCharacterSelected = false;
      this.listCategorySelected = false;
      this.homeSelected = true;
    }
    else if(indice == "actors"){
      this.listActorSelected = true;
      this.listMovieSelected = false;
      this.listDirectorSelected = false;
      this.listCharacterSelected = false;
      this.listCategorySelected = false;
      this.homeSelected = false;
    }else if (indice == "movies"){
      this.listActorSelected = false;
      this.listMovieSelected = true;
      this.listDirectorSelected = false;
      this.listCharacterSelected = false;
      this.listCategorySelected = false;
      this.homeSelected = false;
    }else if (indice == "directors"){
      this.listActorSelected = false;
      this.listMovieSelected = false;
      this.listDirectorSelected = true;
      this.listCharacterSelected = false;
      this.listCategorySelected = false;
      this.homeSelected = false;
    }else if (indice == "characters"){
      this.listActorSelected = false;
      this.listMovieSelected = false;
      this.listDirectorSelected = false;
      this.listCharacterSelected = true;
      this.listCategorySelected = false;
      this.homeSelected = false;
    }else if (indice == "categories"){
      this.listActorSelected = false;
      this.listMovieSelected = false;
      this.listDirectorSelected = false;
      this.listCharacterSelected = false;
      this.listCategorySelected = true;
      this.homeSelected = false;
    }
  }
}


