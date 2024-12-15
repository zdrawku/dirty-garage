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

  ngOnInit() {
    this.initClient();
  }

  initClient() {
    loadGapiInsideDOM().then(() => {
      gapi.load('client:auth2', () => {
        gapi.client.init({
          apiKey: 'AIzaSyBz0NpSnreu4Cc0_T_CiQ_GJezMPfVmWlA',
          clientId: '37701646525-plq9t5pd7kuaprts2p6b210maoa25kg8.apps.googleusercontent.com',
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
          scope: 'https://www.googleapis.com/auth/calendar'
        }).then(() => {
          console.log('Google API client initialized successfully.');
          gapi.auth2.getAuthInstance().signIn().then(() => {
            console.log('User signed in successfully.');
          }).catch((error: any) => {
            console.error('Error signing in:', error);
          });
        }).catch((error: any) => {
          console.error('Error initializing Google API client:', error);
        });
      });
    }).catch((error: any) => {
      console.error('Error loading GAPI inside DOM:', error);
    });
  }

  // bookAppointment(event: Event) {
  //   debugger;
  //   event.preventDefault();
  //   const form = event.target as HTMLFormElement;
  //   const date = (form.querySelector('#date') as HTMLInputElement).value;
  //   const time = (form.querySelector('#time') as HTMLInputElement).value;

  //   const eventDetails = {
  //     summary: 'Google I/O 2015',
  //     location: '800 Howard St., San Francisco, CA 94103',
  //     description: 'A chance to hear more about Google\'s developer products.',
  //     start: {
  //       dateTime: `${date}T${time}:00`,
  //       timeZone: 'Europe/Sofia'
  //     },
  //     end: {
  //       dateTime: `${date}T${time}:00`,
  //       timeZone: 'Europe/Sofia'
  //     },
  //     recurrence: [
  //       'RRULE:FREQ=DAILY;COUNT=2'
  //     ],
  //     // attendees: [
  //     //   { email: 'lpage@example.com' },
  //     //   { email: 'sbrin@example.com' }
  //     // ],
  //     // reminders: {
  //     //   useDefault: false,
  //     //   overrides: [
  //     //     { method: 'email', minutes: 24 * 60 },
  //     //     { method: 'popup', minutes: 10 }
  //     //   ]
  //     // }
  //   };

  //   gapi.client.calendar.events.insert({
  //     calendarId: 'primary',
  //     resource: eventDetails
  //   }).then((response: any) => {
  //     console.log('Event created: ' + response.result.htmlLink);
  //   }).catch((error: any) => {
  //     console.error('Error creating event: ' + error);
  //   });
  // }

  bookAppointment(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const date = (form.querySelector('#date') as HTMLInputElement).value;
    const time = (form.querySelector('#time') as HTMLInputElement).value;
  
    // Commented out the event creation code
    /*
    const eventDetails = {
      summary: 'Google I/O 2015',
      location: '800 Howard St., San Francisco, CA 94103',
      description: 'A chance to hear more about Google\'s developer products.',
      start: {
        dateTime: `${date}T${time}:00`,
        timeZone: 'Europe/Sofia'
      },
      end: {
        dateTime: `${date}T${time}:00`,
        timeZone: 'Europe/Sofia'
      },
      recurrence: [
        'RRULE:FREQ=DAILY;COUNT=2'
      ],
      attendees: [
        { email: 'lpage@example.com' },
        { email: 'sbrin@example.com' }
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 },
          { method: 'popup', minutes: 10 }
        ]
      }
    };
  
    if (gapi.client.calendar) {
      gapi.client.calendar.events.insert({
        calendarId: 'primary',
        resource: eventDetails
      }).then((response: any) => {
        console.log('Event created: ' + response.result.htmlLink);
      }).catch((error: any) => {
        console.error('Error creating event: ' + error);
      });
    } else {
      console.error('Google Calendar API is not loaded.');
    }
    */
  
    // New code to send an email
    const mailtoLink = `mailto:dirty.garage23@gmail.com?subject=Искам час за полиране на фарове&body=I would like to set an appointment on ${date} at ${time}.`;
    window.location.href = mailtoLink;
  }
}