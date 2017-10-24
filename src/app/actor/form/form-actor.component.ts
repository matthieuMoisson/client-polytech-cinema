import { Component } from '@angular/core';

export class Actor {
 id: number;
 name: string;
 description: string;
}

@Component({
    selector: 'form-actor-root',
    templateUrl:'./form-actor.component.html',
    styleUrls: ['./form-actor.component.css']
})


export class FormActorComponent {
}


