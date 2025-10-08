import { Component, ViewChild } from '@angular/core';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular';
import { FormsModule, NgForm, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-scheduler',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, FormsModule, IgxTooltipDirective, IgxTooltipTargetDirective],
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent {
  @ViewChild('appointmentForm') appointmentForm: NgForm | undefined; // Declare appointmentForm
  service: string = 'polishing';

  bookAppointment(event: Event) {
    event.preventDefault();
    if (this.appointmentForm) { // Check if appointmentForm is defined
      // Apply the custom validator to the 'time' control
      this.appointmentForm.controls['time'].setValidators([this.customTimeValidator()]);
      this.appointmentForm.controls['time'].updateValueAndValidity();
      
      // this.appointmentForm.submitted = true;
      if (this.appointmentForm.valid) {
        const form = event.target as HTMLFormElement;
        const date = (form.querySelector('#date') as HTMLInputElement).value;
        const time = (form.querySelector('#time') as HTMLInputElement).value;
        const name = (form.querySelector('#name') as HTMLInputElement).value;
        const phone = (form.querySelector('#phone') as HTMLInputElement).value;
        const serviceElement = form.querySelector('#service') as HTMLSelectElement;
        const service = serviceElement.value;
        const serviceText = serviceElement.options[serviceElement.selectedIndex].innerText;
        const model = (form.querySelector('#model') as HTMLInputElement).value;
  
        const subject = encodeURIComponent(`Искам час за ${serviceText} от ${name || phone}`);
        const startTime = time.replace(':', '');
        const endTime = this.calculateEndTime(startTime);
        const calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Запазване на час за ${serviceText} от ${name || phone}`)}&dates=${date.replace(/-/g, '')}T${startTime}00/${date.replace(/-/g, '')}T${endTime}00&details=${encodeURIComponent(`${serviceText}\nИмейл: ${name}\nТелефон: ${phone}\nМодел: ${model}`)}&location=${encodeURIComponent('Dirty Garage')}`;

        // Create the email body with the direct calendar link
        const body = encodeURIComponent(`Искам да запазя час за ${serviceText} на ${date} в ${time} часа за 3 часа.\n\nДобави срещата в Google Calendar от тук:\n${calendarLink}\n\nТелефон: ${phone}\nИмейл: ${name}\nМарка, модел и година на автомобил: ${model}`);
        const mailtoLink = `mailto:dirty.garage23@gmail.com?subject=${subject}&body=${body}`;

        // Open the mailto link directly
        window.location.href = mailtoLink;
      } else {
        alert('Моля, попълнете всички полета правилно.');
      }
    }
  }

  // Helper function to calculate end time
  calculateEndTime(startTime: string): string {
    let hours = parseInt(startTime.slice(0, 2));
    let minutes = parseInt(startTime.slice(2));

    // Add 3 hours to the start time
    hours += 3; // Duration is 3 hours

    // Handle day overflow if necessary (not implemented here since we're assuming within same day)
    if (hours >= 24) {
      hours -= 24; // This would need more complex logic for multi-day events
    }

    return `${hours.toString().padStart(2, '0')}${minutes.toString().padStart(2, '0')}`;
  }

  customTimeValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if (!control.value) return null;
      const [hours, minutes] = control.value.split(':').map(Number);
      if (hours < 9 || hours >= 18) {
        return { 'invalidTime': true };
      }
      return null;
    };
  }
}
