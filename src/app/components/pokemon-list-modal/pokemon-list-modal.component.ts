import { NgClass } from '@angular/common';
import { Component, inject, linkedSignal, model, output } from '@angular/core';
import { ModalService } from '@services/modal.service';

@Component({
  selector: 'app-pokemon-list',
  imports: [NgClass],
  templateUrl: './pokemon-list-modal.component.html',
})
export default class PokemonListModalComponent {
  modalService = inject(ModalService);

  modalState = linkedSignal<boolean>(() =>
    this.modalService.pokemonModalState()
  );

  closeModal() {
    this.modalService.modifyPokemonModal(false);
  }
}
