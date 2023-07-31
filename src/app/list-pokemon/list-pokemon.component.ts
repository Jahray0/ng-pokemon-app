import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent {
  pokemonsList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit(): void {}
}
