import { Component, output } from '@angular/core';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  closeModal = output();
}
