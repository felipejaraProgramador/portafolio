import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExperienceComponent } from './page-experience.component';

describe('PageExperienceComponent', () => {
  let component: PageExperienceComponent;
  let fixture: ComponentFixture<PageExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
