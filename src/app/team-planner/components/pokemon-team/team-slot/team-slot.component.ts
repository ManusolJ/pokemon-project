import { Component, input, output } from '@angular/core';
import Pokemon from '@interfaces/pokemon.interface';

@Component({
  selector: 'app-team-slot',
  imports: [],
  templateUrl: './team-slot.component.html',
})
export default class TeamSlotComponent {
  pokemon = input<Pokemon>();
  index = input.required<number>();
  openPokemonSelection = output<number>();
}
