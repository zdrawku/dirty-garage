import { Component } from '@angular/core';
import { IgxButtonDirective, IgxIconComponent, IgxRippleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-contact-information',
  imports: [IgxButtonDirective, IgxRippleDirective, IgxIconComponent],
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent {}
