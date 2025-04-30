import { Component } from '@angular/core';
import { PokemonTeamComponent } from "../../components/pokemon-team/pokemon-team.component";

@Component({
  selector: 'app-team-builder',
  imports: [PokemonTeamComponent],
  templateUrl: './team-builder.component.html',
})
export default class TeamBuilderComponent {}
