import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublichPageComponent } from './publich-page.component';

describe('PublichPageComponent', () => {
  let component: PublichPageComponent;
  let fixture: ComponentFixture<PublichPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublichPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublichPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
