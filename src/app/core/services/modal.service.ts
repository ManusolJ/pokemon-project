import { Injectable, signal } from '@angular/core';
import { AuthModalState } from '@interfaces/auth-modal-state.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  authModalState = signal<AuthModalState>('closed');
  pokemonModalState = signal<boolean>(false);

  modifyAuthModal(modalState: AuthModalState) {
    this.authModalState.set(modalState);
  }

  modifyPokemonModal(ModalState: boolean) {
    this.pokemonModalState.set(ModalState);
  }
}
