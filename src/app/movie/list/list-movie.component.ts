import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import {Movie} from '../movie';
import {Category} from '../../category/category';

import { filterMovie } from '../../pipes/pipes'
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalContent } from '../../ngbd-modal-content';

@Component({
    selector: 'list-movie-root',
    templateUrl:'./list-movie.component.html',
    styleUrls: ['./list-movie.component.css']
})


export class ListMovieComponent implements OnInit{
  movies: Movie[];
  categories: Category[];
  title: String = "";
  category: String = "?"; 
  constructor(private http: HttpClient, private modalService: NgbModal) {
    
  }

  ngOnInit(): void {
    const url = 'http://localhost:8080/cinema/api/film';
    this.http.get(url).subscribe((movies: Movie[])  => {
      this.movies = movies;
      for(var i = 0; i < this.movies.length; i ++){
        this.movies[i].show = true;
      }
    });

    const urlCategories = 'http://localhost:8080/cinema/api/category';
    this.http.get(urlCategories).subscribe((categories: Category[])  => {
      this.categories = categories;
    });
  }  

  edit(id) {
    console.log("je passse dans le edit");
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.type = "movie";
    modalRef.componentInstance.id = id;
  }

  delete(id) {
    let url = 'http://localhost:8080/cinema/api/film/' + id;
    this.http.delete(url).subscribe(
      res => console.log(res), 
      msg => {
        if(msg = "OK"){// Si l'acteur est bien supprimé
          for(var i = 0; i < this.movies.length; i++){
            if(this.movies[i].id == id){
              var indice = i;
            }
          }
          this.movies.splice(indice, 1);
          alert("Film supprimé avec succé");
        }else{
          alert("Le film n'a pas était supprimé");
        }
      }
    );
  }
}


