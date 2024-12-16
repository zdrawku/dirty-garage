import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IgxButtonDirective } from 'igniteui-angular';
import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CalendarComponent, NoopAnimationsModule, FormsModule, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IgxButtonDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
