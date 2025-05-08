import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import PokemonStat from '@interfaces/pokemon-stat.interface';

@Component({
  selector: 'app-pokemon-slider',
  imports: [NgClass],
  templateUrl: './pokemon-slider.component.html',
})
export default class PokemonSliderComponent {
  stat = input.required<PokemonStat>();
  baseValue = input.required<number>();

  statNameValue: Record<string, string> = {
    HP: 'HP',
    attack: 'Attack',
    defense: 'Defense',
    specialAttack: 'Special Attack',
    specialDefense: 'Special Defense',
    speed: 'Speed',
  };

  readonly statColors = {
    HP: 'error',
    attack: 'warning',
    defense: 'info',
    specialAttack: 'secondary',
    specialDefense: 'success',
    speed: 'accent',
  };

  readonly statLabels = {
    HP: 'HP',
    attack: 'Attack',
    defense: 'Defense',
    specialAttack: 'Sp. Atk',
    specialDefense: 'Sp. Def',
    speed: 'Speed',
  };

  // get totalStat(): number {
  //   return Math.floor(
  //     (((2 * this.baseValue + this.currentIV + Math.floor(this.currentEV / 4)) *
  //       this.level) /
  //       100 +
  //       5) *
  //       (this.nature === 'boosted' ? 1.1 : this.nature === 'hindered' ? 0.9 : 1)
  //   );
  // }

  rangeChange() {
    console.log('Change');
  }
}
