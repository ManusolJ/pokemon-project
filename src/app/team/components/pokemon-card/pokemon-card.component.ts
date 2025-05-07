import { Component, signal } from '@angular/core';
import { PokemonDataComponent } from './pokemon-data/pokemon-data.component';

@Component({
  selector: 'app-pokemon-card',
  imports: [PokemonDataComponent],
  templateUrl: './pokemon-card.component.html',
})
export default class PokemonCardComponent {
  isDataTabActive = signal(true);

  changeDataTab() {
    this.isDataTabActive.update((v) => !v);
  }
}
