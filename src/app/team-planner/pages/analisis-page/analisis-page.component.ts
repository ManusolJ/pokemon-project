import { Component } from '@angular/core';
import { PokemonCardComponent } from '@teamplanner/components/pokemon-card/pokemon-card.component';
import { PokemonTeamComponent } from '@teamplanner/components/pokemon-team/pokemon-team.component';

@Component({
  selector: 'app-analisis-page',
  imports: [PokemonCardComponent, PokemonTeamComponent],
  templateUrl: './analisis-page.component.html',
})
export default class AnalisisPageComponent {}
