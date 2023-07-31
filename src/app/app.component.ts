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
  pokemonSelected: Pokemon | undefined;

  ngOnInit(): void {
    console.table(this.pokemonsList);
  }

  selectPokemon(pokemonId: string) {
    const id = +pokemonId;
    const pokemon: Pokemon | undefined = this.pokemonsList.find(
      (pokemon) => pokemon.id === +pokemonId
    );
    if (pokemon) {
      console.log(`Vous avez demandé le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez demandé un pokemon qui n'existe pas`);
      this.pokemonSelected = pokemon;
    }
  }
}
