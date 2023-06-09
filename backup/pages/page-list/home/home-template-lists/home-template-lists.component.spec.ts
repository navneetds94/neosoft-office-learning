import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTemplateListsComponent } from './home-template-lists.component';

describe('HomeTemplateListsComponent', () => {
  let component: HomeTemplateListsComponent;
  let fixture: ComponentFixture<HomeTemplateListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTemplateListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTemplateListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
