import { Component } from '@angular/core';
import PokemonCardComponent from '@teamplanner/components/pokemon-card/pokemon-card.component';
import PokemonTeamComponent from '@teamplanner/components/pokemon-team/pokemon-team.component';
import PokemonStatsComponent from '@teamplanner/components/pokemon-stats/pokemon-stats.component';

@Component({
  selector: 'app-team-builder',
  imports: [PokemonTeamComponent, PokemonCardComponent, PokemonStatsComponent],
  templateUrl: './builder-page.component.html',
})
export default class TeamBuilderComponent {}
