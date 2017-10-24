import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Actor} from '../actor';


@Component({
    selector: 'list-actor-root',
    templateUrl: './list-actor.component.html',
    styleUrls: ['./list-actor.component.css'],
    providers: []
})


export class ListActorComponent implements OnInit {
    actors: Actor[];

    constructor(private http: HttpClient) {
      
    }

    results: string[];
    ngOnInit(): void {
      const url = 'http://localhost:8080/cinema/api/actor';
      this.http.get(url).subscribe((actors: Actor[])  => {
        this.actors = actors;
        // console.log(this.actors);
      });
    }
}


