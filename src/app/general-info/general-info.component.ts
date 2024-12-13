import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_CARD_DIRECTIVES } from 'igniteui-angular';

@Component({
  selector: 'app-general-info',
  imports: [RouterLink, IGX_CARD_DIRECTIVES],
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent {
  public groupVisible: boolean = false;
}
