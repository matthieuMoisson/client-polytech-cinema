import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import {Category} from '../category';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalContent } from '../../ngbd-modal-content';

import { filterByCategory } from '../../pipes/pipes';

@Component({
    selector: 'list-category-root',
    templateUrl:'./list-category.component.html',
    styleUrls: ['./list-category.component.css']
})


export class ListCategoryComponent implements OnInit{
  categorys: Category[];

  code : String = "";
  name : String = "";
  constructor(private http: HttpClient, private modalService: NgbModal) {
    
  }

  ngOnInit(): void {
    this.load();
  }  
  
  edit(id) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.type = "category";
    modalRef.componentInstance.id = id;
  }

  delete(id) {
    let url = 'http://localhost:8080/cinema/api/category/' + id;
    this.http.delete(url).subscribe(
      res => console.log(res), 
      msg => {
        if(msg = "OK"){// Si l'acteur est bien supprimé
          for(var i = 0; i < this.categorys.length; i++){
            if(this.categorys[i].code == id){
              var indice = i;
            }
          }
          this.categorys.splice(indice, 1);
          alert("Category supprimé avec succé");
        }else{
          alert("La categoryr n'a pas était supprimé");
        }
      }
    );
  }

  load(): void {
    const url = 'http://localhost:8080/cinema/api/category';
    this.http.get(url).subscribe((categorys: Category[])  => {
      this.categorys = categorys;
    });
  }
}


