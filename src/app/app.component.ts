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

  ngOnInit(): void {
    console.table(this.pokemonsList);
    this.selectPokemon(this.pokemonsList[0]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sue le pokémon ${pokemon.name}`);
  }
}
