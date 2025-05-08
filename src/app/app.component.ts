import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import AuthModalPageComponent from './core/auth/authModalPage/authModalPage.component';
import PokemonListModalComponent from './components/pokemon-list-modal/pokemon-list-modal.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterComponent,
    NavbarComponent,
    AuthModalPageComponent,
    PokemonListModalComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
