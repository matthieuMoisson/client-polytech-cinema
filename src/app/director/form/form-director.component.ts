import {Component, Input, OnInit} from '@angular/core';
import {Director} from '../director';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'form-director-root',
    templateUrl:'./form-director.component.html',
    styleUrls: ['./form-director.component.css']
})


export class FormDirectorComponent implements OnInit {
    @Input() id;
    director: Director;
    constructor(private http: HttpClient) {
    }
  
    ngOnInit(): void {
        if(this.id == 0){ //C'est un ajout donc on n'a pas besoin de charger la personne
            this.director = new Director();
        }else{
            const url = 'http://localhost:8080/cinema/api/director/'+ this.id;
            this.http.get(url).subscribe((director: Director)  => {
                this.director = director;
            });
        }
    }  
    valider() {
        alert("c'est comme si la modification était faites");
    }
}


