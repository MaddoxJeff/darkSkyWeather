import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipcodeDialogueComponent } from './zipcode-dialogue.component';

describe('ZipcodeDialogueComponent', () => {
  let component: ZipcodeDialogueComponent;
  let fixture: ComponentFixture<ZipcodeDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipcodeDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipcodeDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
