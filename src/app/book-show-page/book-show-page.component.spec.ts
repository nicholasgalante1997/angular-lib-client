import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookShowPageComponent } from './book-show-page.component';

describe('BookShowPageComponent', () => {
  let component: BookShowPageComponent;
  let fixture: ComponentFixture<BookShowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookShowPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
