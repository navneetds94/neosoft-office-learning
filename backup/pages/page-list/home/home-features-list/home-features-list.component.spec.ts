import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeaturesListComponent } from './home-features-list.component';

describe('HomeFeaturesListComponent', () => {
  let component: HomeFeaturesListComponent;
  let fixture: ComponentFixture<HomeFeaturesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFeaturesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFeaturesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
