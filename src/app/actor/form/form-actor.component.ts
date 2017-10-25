import {Component, Input, OnInit} from '@angular/core';
import {Actor} from '../actor';
import { HttpClient } from '@angular/common/http';

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
        alert("c'est comme si la modification était faites");
        console.log("POST");
        console.log(this.actor);
        let url = 'http://localhost:8080/cinema/api/actor/';
        this.http.post(url, {
            "birthday": "" + this.actor.birthday,
            "deathDate": "" + this.actor.deathDate, 
            "firstName": "" + this.actor.firstName, 
            "name": "" + this.actor.name
        }).subscribe(res => console.log(res));
    }
}



