import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Actor} from '../actor';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {filterByActor} from '../../pipes/pipes';

import { NgbdModalContent } from '../../ngbd-modal-content';

@Component({
    selector: 'list-actor-root',
    templateUrl: './list-actor.component.html',
    styleUrls: ['./list-actor.component.css'],
    providers: []
})


export class ListActorComponent implements OnInit {
    actors: Actor[];
    name: string = "";
    firstName: string = "";
    constructor(private http: HttpClient, private modalService: NgbModal) {
      
    }

    results: string[];
    ngOnInit(): void {
      this.load();
    }

    edit(id) {
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.type = "actor";
      modalRef.componentInstance.id = id;
    }

    delete(id) {
      let url = 'http://localhost:8080/cinema/api/actor/' + id;
      this.http.delete(url).subscribe(
        res => console.log(res), 
        msg => {
          if(msg = "OK"){// Si l'acteur est bien supprimé
            for(var i = 0; i < this.actors.length; i++){
              if(this.actors[i].id == id){
                var indice = i;
              }
            }
            this.actors.splice(indice, 1);
            alert("Acteur supprimé avec succé");
          }else{
            alert("L'acteur n'a pas était supprimé");
          }
        }
      );
    }

    load(): void {
      const url = 'http://localhost:8080/cinema/api/actor';
      this.http.get(url).subscribe((actors: Actor[])  => {
        this.actors = actors;
        for(var i = 0; i < this.actors.length; i ++){
          this.actors[i].show = true;
        }
      });
    }
}


