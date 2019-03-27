import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiclibrayComponent } from './piclibray.component';

describe('PiclibrayComponent', () => {
  let component: PiclibrayComponent;
  let fixture: ComponentFixture<PiclibrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiclibrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiclibrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
