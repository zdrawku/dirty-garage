import { Component } from '@angular/core';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-scheduler',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective],
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent {

  bookAppointment(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const date = (form.querySelector('#date') as HTMLInputElement).value;
    const time = (form.querySelector('#time') as HTMLInputElement).value;
    const mail = (form.querySelector('#mail') as HTMLInputElement).value;
    const phone = (form.querySelector('#phone') as HTMLInputElement).value;

    const subject = encodeURIComponent(`Искам час за полиране на фарове от ${mail || phone}`);
    const calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Запазване на час за полиране от ${mail || phone}`)}&dates=${date.replace(/-/g, '')}T${time.replace(':', '')}00/${date.replace(/-/g, '')}T${(parseInt(time.split(':')[0]) + 1).toString().padStart(2, '0')}${time.split(':')[1]}00&details=${encodeURIComponent(`Полиране на фарове\nИмейл: ${mail}\nТелефон: ${phone}`)}&location=${encodeURIComponent('Dirty Garage')}`;
    const body = encodeURIComponent(`Искам да запазя час за ${date} в ${time} часа.\n\nМожете да добавите срещата в Google Calendar чрез следния линк:\n${calendarLink}\n\nТелефон: ${phone}\nИмейл: ${mail}`);
    const mailtoLink = `mailto:dirty.garage23@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
}
}
