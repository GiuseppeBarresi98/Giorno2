import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNonattiviComponent } from './post-nonattivi.component';

describe('PostNonattiviComponent', () => {
  let component: PostNonattiviComponent;
  let fixture: ComponentFixture<PostNonattiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostNonattiviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostNonattiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
