import { Component } from '@angular/core';
import { PokemonDataComponent } from './pokemon-data/pokemon-data.component';

@Component({
  selector: 'app-pokemon-card',
  imports: [PokemonDataComponent],
  templateUrl: './pokemon-card.component.html',
})
export default class PokemonCardComponent {
  tabLinkList = ['data', 'moves'];
}
