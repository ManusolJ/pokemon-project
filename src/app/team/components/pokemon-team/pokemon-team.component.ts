import { Component } from '@angular/core';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";

@Component({
  selector: 'app-pokemon-team',
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-team.component.html',
})
export class PokemonTeamComponent { }
