import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import {Movie} from '../movie';

import {Character} from '../../character/character';


@Component({
    selector: 'vue-movie-root',
    templateUrl:'./vue-movie.component.html',
    styleUrls: ['./vue-movie.component.css']
})


export class VueMovieComponent implements OnInit{
  @Input() id;
  movie: Movie;
  characters: Character[];
  constructor(private http: HttpClient, public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    console.log(this.id);
    this.load();
  }  

  load(): void {
    const url = 'http://localhost:8080/cinema/api/film/' + this.id;
    this.http.get(url).subscribe((movie: Movie)  => {
      this.movie = movie;
      console.log(this.movie);
    });

    const urlCharacter = 'http://localhost:8080/cinema/api/character/film/' + this.id;
    this.http.get(urlCharacter).subscribe((characters: Character[])  => {
      this.characters = characters;
      console.log(this.characters);
    });
  }
}


