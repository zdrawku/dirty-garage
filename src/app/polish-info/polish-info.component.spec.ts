import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';
import { PolishInfoComponent } from './polish-info.component';

describe('PolishInfoComponent', () => {
  let component: PolishInfoComponent;
  let fixture: ComponentFixture<PolishInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolishInfoComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule, IgxButtonDirective, IgxRippleDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolishInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
