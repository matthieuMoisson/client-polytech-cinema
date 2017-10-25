import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../character';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'form-character-root',
    templateUrl:'./form-character.component.html',
    styleUrls: ['./form-character.component.css']
})


export class FormCharacterComponent implements OnInit {
    @Input() id;
    character: Character;
    constructor(private http: HttpClient) {
    }
  
    ngOnInit(): void {
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
        alert("c'est comme si la modification était faites");
    }
}


