import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWorkingComponent } from './page-working.component';

describe('PageWorkingComponent', () => {
  let component: PageWorkingComponent;
  let fixture: ComponentFixture<PageWorkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWorkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
