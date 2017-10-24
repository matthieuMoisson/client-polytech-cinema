import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import {Movie} from '../movie';

@Component({
    selector: 'list-movie-root',
    templateUrl:'./list-movie.component.html',
    styleUrls: ['./list-movie.component.css']
})


export class ListMovieComponent implements OnInit{
  movies: Movie[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url = 'http://localhost:8080/cinema/api/film';
    this.http.get(url).subscribe((movies: Movie[])  => {
      this.movies = movies;
      // console.log(this.movies);
    });
  }  
}


