import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreSelectionComponent } from './theatre-selection.component';

describe('TheatreSelectionComponent', () => {
  let component: TheatreSelectionComponent;
  let fixture: ComponentFixture<TheatreSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheatreSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheatreSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
