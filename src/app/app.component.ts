import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Liste de Pokémon</h1>`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  pokemonsList : string[] = ['Bulbizarre', 'Salamèche', 'Carapuce'];

  ngOnInit(): void {
    console.log(this.pokemonsList);
    console.table(this.pokemonsList);
    this.selectPokemon('Bulbizarre');

  }

  selectPokemon(pokemonName: string) {
    console.log(`Vous avez cliqué sue le pokémon ${pokemonName}`);
  }

}
