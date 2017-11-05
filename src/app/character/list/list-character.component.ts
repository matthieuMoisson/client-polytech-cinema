import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import {Character} from '../character';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalContent } from '../../ngbd-modal-content';

@Component({
    selector: 'list-character-root',
    templateUrl:'./list-character.component.html',
    styleUrls: ['./list-character.component.css']
})


export class ListCharacterComponent implements OnInit{
  characters: Character[];

  constructor(private http: HttpClient, private modalService: NgbModal) {
    
  }

  ngOnInit(): void {
    const url = 'http://localhost:8080/cinema/api/character';
    this.http.get(url).subscribe((characters: Character[])  => {
      this.characters = characters;
    });
  }  

  edit(id) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.type = "character";
    modalRef.componentInstance.id = id;
  }

  delete(id) {
    let url = 'http://localhost:8080/cinema/api/character/' + id;
    this.http.delete(url).subscribe(
      res => console.log(res), 
      msg => {
        if(msg = "OK"){// Si l'acteur est bien supprimé
          for(var i = 0; i < this.characters.length; i++){
            if(this.characters[i].id == id){
              var indice = i;
            }
          }
          this.characters.splice(indice, 1);
          alert("Personnage supprimé avec succé");
        }else{
          alert("Le personnage n'a pas était supprimé");
        }
      }
    );
  }
}


