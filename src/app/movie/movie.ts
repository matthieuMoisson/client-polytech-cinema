import {Director} from '../director/director';
import {Category} from '../category/category';

export class Movie {
    id: number;
    budget: number;
    duration: number;
    grossing: number;
    
    releaseDate: string;
    title: string;
    director: Director;
    category: Category;
}