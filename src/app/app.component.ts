import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IGX_NAVBAR_DIRECTIVES, IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxRippleDirective, IgxToggleActionDirective } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, IGX_NAVBAR_DIRECTIVES, IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxRippleDirective, IgxToggleActionDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public iconButtonVisible: boolean = false;
  public iconButtonVisible1: boolean = false;
  public iconButtonVisible2: boolean = false;
  phoneNumber: string = '+359898443755';

  openGoogleMaps(): void {
    const place = 'София, ж.к. Младост 2 272Б';
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
    window.open(googleMapsUrl, '_blank'); // Open in a new tab
  }

  openPhoneNumber(): void {
    window.location.href = `tel:${this.phoneNumber}`;
  }

  public stringToNumber(value: string): number {
		return parseFloat(value);
	}
}
