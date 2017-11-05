import {Component, Input, OnInit} from '@angular/core';
import {Director} from '../director';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

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
        var params: HttpParams = new HttpParams().set("firstName", this.director.firstName)
        .set("name", this.director.name);

        if(this.director.id==undefined){
            console.log(this.director);
            let url = 'http://localhost:8080/cinema/api/director/';
            this.http.post(url, {},{ params }
            ).subscribe(
                res => alert("Ajout avec succés"), 
                msg=>alert("L'ajout n'a pas marché")
            );
        }else{
            let url = 'http://localhost:8080/cinema/api/director/' + this.director.id;
            this.http.put(url, {},{ params }
            ).subscribe(
                res => alert("Modification avec succés"), 
                msg=>alert("La modification n'a pas marché")
            );
        }  
    }

    isInvalid(): boolean{
        return this.director.firstName == undefined 
            || this.director.firstName == ""
            || this.director.name == undefined
            || this.director.name == ""
    }
}


