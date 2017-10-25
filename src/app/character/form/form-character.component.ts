import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../character';
import {Movie} from '../../movie/movie';
import {Actor} from '../../actor/actor';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'form-character-root',
    templateUrl:'./form-character.component.html',
    styleUrls: ['./form-character.component.css']
})


export class FormCharacterComponent implements OnInit {
    @Input() id;
    character: Character;
    movies: Movie[];
    actors: Actor[];
    constructor(private http: HttpClient) {
    }
  
    ngOnInit(): void {
        const urlActors = 'http://localhost:8080/cinema/api/actor';
        this.http.get(urlActors).subscribe((actors: Actor[])  => {
          this.actors = actors;
        });

        const urlMovies = 'http://localhost:8080/cinema/api/film';
        this.http.get(urlMovies).subscribe((movies: Movie[])  => {
          this.movies = movies;
        });

        if(this.id == 0){ //C'est un ajout donc on n'a pas besoin de charger la personne
            this.character = new Character();
        }else{
            const url = 'http://localhost:8080/cinema/api/character/'+ this.id;
            this.http.get(url).subscribe((character: Character)  => {
                this.character = character;
            });
        }
    }  
    valider() {
        console.log(this.character);
    }
}


