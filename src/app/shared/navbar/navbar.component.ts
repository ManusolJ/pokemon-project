import { Component } from '@angular/core';
import { MobileLinkMenuComponent } from './mobile-link-menu/mobile-link-menu.component';
import { DesktopLinkMenuComponent } from './desktop-link-menu/desktop-link-menu.component';
import { LogoComponent } from './nav-logo/logo.component';
import { NavProfileComponent } from './nav-profile/nav-profile.component';

@Component({
  selector: 'app-navbar',
  imports: [
    MobileLinkMenuComponent,
    DesktopLinkMenuComponent,
    LogoComponent,
    NavProfileComponent,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {}
