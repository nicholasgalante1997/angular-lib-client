import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedBookcaseComponent } from './recommended-bookcase.component';

describe('RecommendedBookcaseComponent', () => {
  let component: RecommendedBookcaseComponent;
  let fixture: ComponentFixture<RecommendedBookcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedBookcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedBookcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
