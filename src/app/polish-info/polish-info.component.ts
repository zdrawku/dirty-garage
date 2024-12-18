import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-polish-info',
  imports: [RouterLink, IgxButtonDirective, IgxRippleDirective],
  templateUrl: './polish-info.component.html',
  styleUrls: ['./polish-info.component.scss']
})
export class PolishInfoComponent {
}
