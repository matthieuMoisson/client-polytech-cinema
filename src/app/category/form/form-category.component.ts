import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../category';
import { HttpClient } from '@angular/common/http';

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
  
    ngOnInit(): void {
        if(this.id == 0){ //C'est un ajout donc on n'a pas besoin de charger la personne
            this.category = new Category();
        }else{
            const url = 'http://localhost:8080/cinema/api/category/'+ this.id;
            this.http.get(url).subscribe((category: Category)  => {
                this.category = category;
            });
        }
    } 
    valider() {
        alert("c'est comme si la modification était faites");
    } 
}


