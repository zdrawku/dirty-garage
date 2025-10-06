import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxDateTimeEditorDirective, IgxRippleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-scheduler',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IgxDateTimeEditorDirective, IgxButtonDirective, IgxRippleDirective, FormsModule],
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent {

  public stringToDate(value: string): Date {
    return new Date(value);
  }
}
