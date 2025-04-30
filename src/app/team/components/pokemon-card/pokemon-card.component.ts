import { Component, input } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.component.html',
})
export class PokemonCardComponent {
  pokemonId = input<number>();

  imageLink = environment.imageLink + '6.gif';
}
