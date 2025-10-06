import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonDirective, IgxRippleDirective, IgxIconComponent } from 'igniteui-angular';
import { ContactInformationComponent } from './contact-information.component';

describe('ContactInformationComponent', () => {
  let component: ContactInformationComponent;
  let fixture: ComponentFixture<ContactInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactInformationComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxButtonDirective, IgxRippleDirective, IgxIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
