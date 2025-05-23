import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPWComponent } from './forgot-pw.component';

describe('ForgotPWComponent', () => {
  let component: ForgotPWComponent;
  let fixture: ComponentFixture<ForgotPWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPWComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
