import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../../movie/movie';
import { Director } from '../director';

@Component({
    selector: 'vue-director-root',
    templateUrl:'./vue-director.component.html',
    styleUrls: ['./vue-director.component.css']
})


export class VueDirectorComponent implements OnInit{
  @Input() id;
  movies: Movie[];
  director: Director;
  constructor(private http: HttpClient, public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    console.log(this.id);
    this.load();
  }  

  load(): void {
    const url = 'http://localhost:8080/cinema/api/director/' + this.id;
    this.http.get(url).subscribe((director: Director)  => {
      this.director = director;
    });

    const urlCharacter = 'http://localhost:8080/cinema/api/film/director/' + this.id;
    this.http.get(urlCharacter).subscribe((movies: Movie[])  => {
      this.movies = movies;
    });
  }
}


