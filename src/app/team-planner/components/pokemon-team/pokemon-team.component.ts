import { Component, inject, linkedSignal } from '@angular/core';
import TeamSlotComponent from './team-slot/team-slot.component';
import PokemonService from '@services/pokemon.service';
import Pokemon from '@interfaces/pokemon.interface';
import { ModalService } from '@services/modal.service';

@Component({
  selector: 'app-pokemon-team',
  imports: [TeamSlotComponent],
  templateUrl: './pokemon-team.component.html',
})
export default class PokemonTeamComponent {
  pokemonService = inject(PokemonService);
  modalService = inject(ModalService);

  pokemonTeam = linkedSignal(() => this.pokemonService.pokemonTeam());

  MOCK_POKEMON: Pokemon = {
    id: 1,
    name: 'Charizard',
    type_1: 'Fire',
    type_2: 'Flying',
    nature: 'Serious',
    ability: 'Cringe',
    height: 1.5,
    weight: 35.2,
    hp: 78,
    attack: 85,
    defense: 60,
    special_attack: 95,
    special_defense: 70,
    speed: 100,
    image_url: 'assets/img/art/6.png',
    evolution_stage: 2,
  };

  openModal() {
    this.modalService.modifyPokemonModal(true);
  }
}
