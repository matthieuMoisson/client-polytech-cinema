import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../character';
import {Movie} from '../../movie/movie';
import {Actor} from '../../actor/actor';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

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
        var params: HttpParams = new HttpParams().set('name', this.character.name)
        .set("idActor", ""+ this.character.idActor)
        .set("idFilm", ""+ this.character.idFilm);
        if(this.character.id==undefined){
            console.log(this.character);
            let url = 'http://localhost:8080/cinema/api/character/';
            this.http.post(url, {},{ params }
            ).subscribe(
                res => { alert("Ajout avec succés"); this.init(); }, 
                msg=>alert("L'ajout n'a pas marché")
            );
        }else{
            let url = 'http://localhost:8080/cinema/api/character/' + this.character.id;
            this.http.put(url, {},{ params }
            ).subscribe(
                res => alert("Modification avec succés"), 
                msg=>alert("La modification n'a pas marché")
            );
        }   
    }

    isInvalid(): boolean{
        return this.character.idActor == undefined 
            || this.character.idFilm == undefined
            || this.character.name == ""
            || this.character.name == undefined;
    }

    init(): void{
        this.character = new Character();
    }
}


