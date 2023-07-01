import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  template: `<h1>Liste de Pokémons</h1>`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  pokemonsList: Pokemon[] = POKEMONS;

  ngOnInit(): void {
    console.log(this.pokemonsList);
    console.table(this.pokemonsList);
    this.selectPokemon(this.pokemonsList[0]);

  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sue le pokémon ${pokemon.name}`);
  }

}
