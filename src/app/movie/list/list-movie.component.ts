import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import {Movie} from '../movie';

const MOVIES: Movie[] = [
  { id: 1, name: 'Mr. Nice' },
  { id: 2, name: 'Narco' },
  { id: 3, name: 'Bombasto' },
  { id: 4, name: 'Celeritas' },
  { id: 5, name: 'Magneta' },
  { id: 6, name: 'RubberMan' },
  { id: 7, name: 'Dynama' },
  { id: 8, name: 'Dr IQ' },
  { id: 9, name: 'Magma' },
  { id: 10, name: 'Tornado' }
];

@Component({
    selector: 'list-movie-root',
    templateUrl:'./list-movie.component.html',
    styleUrls: ['./list-movie.component.css']
})


export class ListMovieComponent implements OnInit{
  movies: Movie[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.movies = MOVIES;
  }  

}


