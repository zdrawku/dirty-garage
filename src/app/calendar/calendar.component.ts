import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGX_LIST_DIRECTIVES, IgxDateTimeEditorModule } from 'igniteui-angular';
import { loadGapiInsideDOM, gapi } from 'gapi-script';

@Component({
  selector: 'app-calendar',
  imports: [IGX_LIST_DIRECTIVES, IgxDateTimeEditorModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  constructor(private http: HttpClient) { }
}