import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarLessonsComponent } from './guitar-lessons.component';

describe('GuitarLessonsComponent', () => {
  let component: GuitarLessonsComponent;
  let fixture: ComponentFixture<GuitarLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarLessonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuitarLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
