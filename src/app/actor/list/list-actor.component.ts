import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Actor} from '../actor';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalContent } from '../../ngbd-modal-content';

@Component({
    selector: 'list-actor-root',
    templateUrl: './list-actor.component.html',
    styleUrls: ['./list-actor.component.css'],
    providers: []
})


export class ListActorComponent implements OnInit {
    actors: Actor[];

    constructor(private http: HttpClient, private modalService: NgbModal) {
      
    }

    results: string[];
    ngOnInit(): void {
      const url = 'http://localhost:8080/cinema/api/actor';
      this.http.get(url).subscribe((actors: Actor[])  => {
        this.actors = actors;
      });
    }

    edit(id) {
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.type = "actor";
      modalRef.componentInstance.id = id;
    }

    delete(id) {

      let url = 'http://localhost:8080/cinema/api/actor/' + id;
      this.http.delete(url).subscribe(res => console.log(res));
      if(true){// Si l'acteur est bien supprimé
        for(var i = 0; i < this.actors.length; i++){
          if(this.actors[i].id == id){
            var indice = i;
          }
        }
        this.actors.splice(indice, 1);
      }else{

      }
    }

    
}


