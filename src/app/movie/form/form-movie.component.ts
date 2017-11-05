import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../movie';
import {Category} from '../../category/category';
import {Director} from '../../director/director';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Component({
    selector: 'form-movie-root',
    templateUrl:'./form-movie.component.html',
    styleUrls: ['./form-movie.component.css']
})


export class FormMovieComponent implements OnInit {
    @Input() id;
    movie: Movie;
    categories: Category[];
    directors: Director[];
    constructor(private http: HttpClient) {
    }
  
    ngOnInit(): void {
        console.log("je passe ici");
        const urlCategories = 'http://localhost:8080/cinema/api/category';
        this.http.get(urlCategories).subscribe((categories: Category[])  => {
          this.categories = categories;
        });

        const urlDirector = 'http://localhost:8080/cinema/api/director';
        this.http.get(urlDirector).subscribe((directors: Director[])  => {
          this.directors = directors;
        });

        if(this.id == 0){ 
            this.movie = new Movie();
            this.movie.category = new Category();
            this.movie.category.code = "";
            this.movie.director = new Director();
            this.movie.director.id = 0;
        }else{
            const url = 'http://localhost:8080/cinema/api/film/'+ this.id;
            this.http.get(url).subscribe((movie: Movie)  => {
                this.movie = movie;
            });
        }
    }  
    valider() {
        var params: HttpParams = new HttpParams().set('budget', "" + this.movie.budget)
        .set("category","" + this.movie.category.code)
        .set("director", "" + this.movie.director.id)
        .set("grossing", "" + this.movie.grossing)
        .set("releaseDate", "" + this.movie.releaseDate)
        .set("title", "" + this.movie.title)
        .set("duration", "" + this.movie.duration);
        
        if(this.movie.id==undefined){
            console.log(this.movie);
            let url = 'http://localhost:8080/cinema/api/film/';
            this.http.post(url, {},{ params }
            ).subscribe(
                res => alert("Ajout avec succés"), 
                msg=>alert("L'ajout n'a pas marché")
            );
        }else{
            let url = 'http://localhost:8080/cinema/api/film/' + this.movie.id;
            this.http.put(url, {},{ params }
            ).subscribe(
                res => alert("Modification avec succés"), 
                msg=>alert("La modification n'a pas marché")
            );
        }   
    }

    isInvalid(): boolean{
        return this.movie.title == undefined 
            || this.movie.title == "";
    }
}


