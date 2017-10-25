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
  }
}


