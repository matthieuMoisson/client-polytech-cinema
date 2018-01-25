import {Movie} from '../movie/movie';
import {Actor} from '../actor/actor';

export class Character {
    id: number;
    idFilm: number;
    idActor: number;

    name: string;
    film: Movie;
    actor: Actor;
    
    show: boolean;
}