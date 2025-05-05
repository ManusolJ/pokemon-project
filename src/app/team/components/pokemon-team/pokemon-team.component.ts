import { Component } from '@angular/core';
import { TeamSlotComponent } from './team-slot/team-slot.component';

@Component({
  selector: 'app-pokemon-team',
  imports: [TeamSlotComponent],
  templateUrl: './pokemon-team.component.html',
})
export class PokemonTeamComponent {}
