import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import {Movie} from '../movie';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalContent } from '../../ngbd-modal-content';

@Component({
    selector: 'list-movie-root',
    templateUrl:'./list-movie.component.html',
    styleUrls: ['./list-movie.component.css']
})


export class ListMovieComponent implements OnInit{
  movies: Movie[];

  constructor(private http: HttpClient, private modalService: NgbModal) {
    
  }

  ngOnInit(): void {
    const url = 'http://localhost:8080/cinema/api/film';
    this.http.get(url).subscribe((movies: Movie[])  => {
      this.movies = movies;
    });
  }  

  edit(id) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.type = "movie";
    modalRef.componentInstance.id = id;
  }

  delete(id) {
  }
}


