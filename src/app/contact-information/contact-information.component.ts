import { Component } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-contact-information',
  imports: [IgxButtonDirective, IgxRippleDirective],
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent {
  phoneNumber: string = '+359898443755';

  openViber(): void {
    const viberUrl = `viber://add?number=${this.phoneNumber}`;
    window.location.href = viberUrl;
  }
}
