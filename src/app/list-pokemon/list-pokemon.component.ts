import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent {
  pokemonsList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
    console.log('click');
  }
}
