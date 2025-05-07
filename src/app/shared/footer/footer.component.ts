import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, NgClass],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  isFooterDisplayed = signal<boolean>(false);

  displayFooter() {
    this.isFooterDisplayed.update((v) => !v);
  }
}
