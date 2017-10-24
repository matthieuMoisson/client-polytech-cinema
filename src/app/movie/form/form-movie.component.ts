import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../movie';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'form-movie-root',
    templateUrl:'./form-movie.component.html',
    styleUrls: ['./form-movie.component.css']
})


export class FormMovieComponent implements OnInit {
    @Input() id;
    movie: Movie;
    constructor(private http: HttpClient) {
    }
  
    ngOnInit(): void {
        const url = 'http://localhost:8080/cinema/api/film/'+ this.id;
        this.http.get(url).subscribe((movie: Movie)  => {
            this.movie = movie;
            console.log(this.movie);
        });
    }  
}


