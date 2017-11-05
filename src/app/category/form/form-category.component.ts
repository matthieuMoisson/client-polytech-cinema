import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../category';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Component({
    selector: 'form-category-root',
    templateUrl:'./form-category.component.html',
    styleUrls: ['./form-category.component.css']
})


export class FormCategoryComponent implements OnInit {
    @Input() id;
    category: Category;
    constructor(private http: HttpClient) {
    }
    edition: boolean;
  
    ngOnInit(): void {
        if(this.id == 0){ //C'est un ajout donc on n'a pas besoin de charger la personne
            this.category = new Category();
            this.edition = true;
        }else{
            this.edition = false;
            const url = 'http://localhost:8080/cinema/api/category/'+ this.id;
            this.http.get(url).subscribe((category: Category)  => {
                this.category = category;
            });
        }
    } 

    valider() {
        var params: HttpParams = new HttpParams().set("code", this.category.code)
                                                .set("name", this.category.name);
        if(this.edition){
            console.log(this.category);
            let url = 'http://localhost:8080/cinema/api/category/';
            this.http.post(url, {},{ params }
            ).subscribe(
                res => alert("Ajout avec succés"), 
                msg=>alert("L'ajout n'a pas marché")
            );
        }else{
            let url = 'http://localhost:8080/cinema/api/category/' + this.category.code;
            this.http.put(url, {},{ params }
            ).subscribe(
                res => alert("Modification avec succés"), 
                msg=>alert("La modification n'a pas marché")
            );
        }   
    }

    isInvalid(): boolean{
        return this.category.name == "";
    }
}


