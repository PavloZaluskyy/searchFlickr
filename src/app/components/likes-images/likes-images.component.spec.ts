import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesImagesComponent } from './likes-images.component';

describe('LikesImagesComponent', () => {
  let component: LikesImagesComponent;
  let fixture: ComponentFixture<LikesImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikesImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
