import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import {Director} from '../director';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../../ngbd-modal-content';

import { VueDirectorComponent } from '../vue/vue-director.component';
import { filterByDirector } from '../../pipes/pipes';

@Component({
    selector: 'list-director-root',
    templateUrl:'./list-director.component.html',
    styleUrls: ['./list-director.component.css']
})


export class ListDirectorComponent implements OnInit{
  directors: Director[];
  name: string = "";
  firstName: string = "";

  constructor(private http: HttpClient, private modalService: NgbModal) {
    
  }

  ngOnInit(): void {
    
    this.load();
  }  

  edit(id) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.type = "director";
    modalRef.componentInstance.id = id;
  }

  delete(id) {
    let url = 'http://localhost:8080/cinema/api/director/' + id;
    this.http.delete(url).subscribe(
      res => console.log(res), 
      msg => {
        if(msg = "OK"){// Si l'acteur est bien supprimé
          for(var i = 0; i < this.directors.length; i++){
            if(this.directors[i].id == id){
              var indice = i;
            }
          }
          this.directors.splice(indice, 1);
          alert("Directeur supprimé avec succé");
        }else{
          alert("Le directeur n'a pas était supprimé");
        }
      }
    );
  }

  load(): void {
    const url = 'http://localhost:8080/cinema/api/director';
    this.http.get(url).subscribe((directors: Director[])  => {
      this.directors = directors;
    });
  }

  voir(id) {
    const modalRef = this.modalService.open(VueDirectorComponent);
    modalRef.componentInstance.id = id;
  }
}


