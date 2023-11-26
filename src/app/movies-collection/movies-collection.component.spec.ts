import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCollectionComponent } from './movies-collection.component';

describe('MoviesCollectionComponent', () => {
  let component: MoviesCollectionComponent;
  let fixture: ComponentFixture<MoviesCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesCollectionComponent]
    });
    fixture = TestBed.createComponent(MoviesCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
