import { Component } from '@angular/core';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-scheduler',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent {

  bookAppointment(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const date = (form.querySelector('#date') as HTMLInputElement).value;
    const time = (form.querySelector('#time') as HTMLInputElement).value;
    
    // New code to send an email
    //const mailtoLink = `mailto:dirty.garage23@gmail.com?subject=Искам час за полиране на фарове&body=Искам да запазя час за ${date} в ${time} часа.`;
    const mailtoLink = `mailto:dirty.garage23@gmail.com?subject=Искам час за полиране на фарове&body=Искам да запазя час за 2024-12-20 в 14:00 часа.%0A%0AМожете да добавите срещата в Google Calendar чрез следния линк:%0Ahttps%3A%2F%2Fcalendar.google.com%2Fcalendar%2Frender%3Faction%3DTEMPLATE%26text%3DЗапазване%2520на%2520час%2520за%2520полиране%26dates%3D20241220T140000%2F20241220T150000%26details%3DПолиране%2520на%2520фарове%26location%3DDirty%2520Garage `;
    
    window.location.href = mailtoLink;
  }
}
