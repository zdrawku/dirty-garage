import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolishInfoComponent } from './polish-info.component';

describe('PolishInfoComponent', () => {
  let component: PolishInfoComponent;
  let fixture: ComponentFixture<PolishInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolishInfoComponent]
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
