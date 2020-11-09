import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerRestorationDetailsComponentComponent } from './speaker-restoration-details-component.component';

describe('SpeakerRestorationDetailsComponentComponent', () => {
  let component: SpeakerRestorationDetailsComponentComponent;
  let fixture: ComponentFixture<SpeakerRestorationDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerRestorationDetailsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerRestorationDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
