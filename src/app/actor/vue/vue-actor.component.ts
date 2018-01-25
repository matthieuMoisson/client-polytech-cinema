import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Actor } from '../actor';

import { Movie } from '../../movie/movie';
import { Action } from 'rxjs/scheduler/Action';

@Component({
    selector: 'vue-actor-root',
    templateUrl:'./vue-actor.component.html',
    styleUrls: ['./vue-actor.component.css']
})


export class VueActorComponent implements OnInit{
  @Input() id;
  actor: Actor = new Actor();
  movies: Movie[];
  constructor(private http: HttpClient, public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    console.log(this.id);
    this.load();
  }  

  load(): void {
    const url = 'http://localhost:8080/cinema/api/actor/' + this.id;
    this.http.get(url).subscribe((actor: Actor)  => {
      this.actor = actor;
    });
  }
}


