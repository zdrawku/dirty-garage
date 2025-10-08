import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-information',
  imports: [],
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
