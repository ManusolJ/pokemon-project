import { Component } from '@angular/core';
import PokemonCardComponent from '../../components/pokemon-card/pokemon-card.component';
import { PokemonTeamComponent } from '../../components/pokemon-team/pokemon-team.component';

@Component({
  selector: 'app-analisis-page',
  imports: [PokemonCardComponent, PokemonTeamComponent],
  templateUrl: './analisis-page.component.html',
})
export default class AnalisisPageComponent {}
