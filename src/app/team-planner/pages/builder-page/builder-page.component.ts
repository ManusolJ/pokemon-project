import { Component } from '@angular/core';
import { PokemonCardComponent } from '@teamplanner/components/pokemon-card/pokemon-card.component';
import { PokemonTeamComponent } from '@teamplanner/components/pokemon-team/pokemon-team.component';

@Component({
  selector: 'app-team-builder',
  imports: [PokemonTeamComponent, PokemonCardComponent],
  templateUrl: './builder-page.component.html',
})
export default class TeamBuilderComponent {}
