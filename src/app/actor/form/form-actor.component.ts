import {Component, Input, OnInit} from '@angular/core';
import {Actor} from '../actor';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Component({
    selector: 'form-actor-root',
    templateUrl:'./form-actor.component.html',
    styleUrls: ['./form-actor.component.css']
})


export class FormActorComponent implements OnInit {
    @Input() id;
    actor: Actor;
    constructor(private http: HttpClient) {
    }
  
    ngOnInit(): void {
        if(this.id == 0){ //C'est un ajout donc on n'a pas besoin de charger la personne
            this.actor = new Actor();
        }else{
            const url = 'http://localhost:8080/cinema/api/actor/'+ this.id;
            this.http.get(url).subscribe((actor: Actor)  => {
                this.actor = actor;
            });
        }
    }  

    valider() {
        if(this.actor.deathDate == undefined){
            var params: HttpParams = new HttpParams().set('birthday', this.actor.birthday)
            .set("firstName", this.actor.firstName)
            .set("name", this.actor.name)
        }else{
            var params: HttpParams = new HttpParams().set('birthday', this.actor.birthday)
            .set("firstName", this.actor.firstName)
            .set("name", this.actor.name)
            .set("deathDate", "" + this.actor.deathDate);
        }
        if(this.actor.id==undefined){
            console.log(this.actor);
            let url = 'http://localhost:8080/cinema/api/actor/';
            this.http.post(url, {},{ params }
            ).subscribe(
                res => alert("Ajout avec succés"), 
                msg=>alert("L'ajout n'a pas marché")
            );
        }else{
            let url = 'http://localhost:8080/cinema/api/actor/' + this.actor.id;
            this.http.put(url, {},{ params }
            ).subscribe(
                res => alert("Modification avec succés"), 
                msg=>alert("La modification n'a pas marché")
            );
        }   
    }

    isInvalid(): boolean{
        return this.actor.birthday == undefined 
            || this.actor.birthday == ""
            || this.actor.firstName == undefined
            || this.actor.name == undefined
            || this.actor.name == ""
            || this.actor.firstName == "";
    }
}



