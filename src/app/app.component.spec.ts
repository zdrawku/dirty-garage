import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_NAVIGATION_DRAWER_DIRECTIVES } from 'igniteui-angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule, IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_NAVIGATION_DRAWER_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
