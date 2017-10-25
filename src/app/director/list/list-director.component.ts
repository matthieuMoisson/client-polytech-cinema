import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import {Director} from '../director';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalContent } from '../../ngbd-modal-content';

@Component({
    selector: 'list-director-root',
    templateUrl:'./list-director.component.html',
    styleUrls: ['./list-director.component.css']
})


export class ListDirectorComponent implements OnInit{
  directors: Director[];

  constructor(private http: HttpClient, private modalService: NgbModal) {
    
  }

  ngOnInit(): void {
    const url = 'http://localhost:8080/cinema/api/director';
    this.http.get(url).subscribe((directors: Director[])  => {
      this.directors = directors;
    });
  }  

  edit(id) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.type = "director";
    modalRef.componentInstance.id = id;
  }

  delete(id) {
  }
}


