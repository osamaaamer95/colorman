import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColormanComponent } from './colorman.component';

describe('ColormanComponent', () => {
  let component: ColormanComponent;
  let fixture: ComponentFixture<ColormanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColormanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColormanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
