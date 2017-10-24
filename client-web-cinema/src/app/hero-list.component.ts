import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector:    'hero-list',
  templateUrl: './hero-list.component.html',
  providers:  [ HeroService ]
})

export class Hero {
  id: number;
  name: string;
}

export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private service: HeroService) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  selectHero(hero: Hero) { this.selectedHero = hero; }
}
