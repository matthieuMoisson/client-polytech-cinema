import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import {Category} from '../category';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalContent } from '../../ngbd-modal-content';

@Component({
    selector: 'list-category-root',
    templateUrl:'./list-category.component.html',
    styleUrls: ['./list-category.component.css']
})


export class ListCategoryComponent implements OnInit{
  categorys: Category[];

  constructor(private http: HttpClient, private modalService: NgbModal) {
    
  }

  ngOnInit(): void {
    const url = 'http://localhost:8080/cinema/api/category';
    this.http.get(url).subscribe((categorys: Category[])  => {
      this.categorys = categorys;
    });
  }  
  
  edit(id) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.type = "category";
    modalRef.componentInstance.id = id;
  }

  delete(id) {
  }
}


