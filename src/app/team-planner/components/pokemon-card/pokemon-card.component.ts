import { Component, input, signal } from '@angular/core';
import PokemonDataComponent from './pokemon-data/pokemon-data.component';
import PokemonMovesComponent from './pokemon-moves/pokemon-moves.component';

@Component({
  selector: 'app-pokemon-card',
  imports: [PokemonDataComponent, PokemonMovesComponent],
  templateUrl: './pokemon-card.component.html',
})
export default class PokemonCardComponent {
  pokemonName = input<string>('Pokemon');
  pokemonImage = input<string>('assets/img/art/0.png');

  isDataTabActive = signal(true);

  changeDataTab(state: boolean) {
    this.isDataTabActive.update(() => state);
  }
}
