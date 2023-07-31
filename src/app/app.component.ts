import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  pokemonsList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon;

  ngOnInit(): void {
    console.table(this.pokemonsList);
  }

  selectPokemon(event: MouseEvent) {
    const index: number = +(event.target as HTMLInputElement).value;
    console.log(
      `Vous avez cliqué sue le pokémon ${this.pokemonsList[index].name}`
    );
  }
}
