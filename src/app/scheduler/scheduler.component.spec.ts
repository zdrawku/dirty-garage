import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_INPUT_GROUP_DIRECTIVES, IgxDateTimeEditorDirective, IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';
import { SchedulerComponent } from './scheduler.component';

describe('SchedulerComponent', () => {
  let component: SchedulerComponent;
  let fixture: ComponentFixture<SchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulerComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_INPUT_GROUP_DIRECTIVES, IgxDateTimeEditorDirective, IgxButtonDirective, IgxRippleDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
