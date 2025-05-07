import { Component, input } from '@angular/core';

@Component({
  selector: 'app-team-slot',
  imports: [],
  templateUrl: './team-slot.component.html',
})
export class TeamSlotComponent {
  pokemon = input();

  send() {
    console.log('Borrao');
  }
}
