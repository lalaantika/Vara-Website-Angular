import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TechSupportComponent } from './tech-support.component';

describe('TechSupportComponent', () => {
  let component: TechSupportComponent;
  let fixture: ComponentFixture<TechSupportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TechSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
