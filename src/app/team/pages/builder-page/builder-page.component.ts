import { Component } from '@angular/core';
import { PokemonTeamComponent } from '../../components/pokemon-team/pokemon-team.component';
import PokemonCardComponent from '../../components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-team-builder',
  imports: [PokemonTeamComponent, PokemonCardComponent],
  templateUrl: './builder-page.component.html',
})
export default class TeamBuilderComponent {}
