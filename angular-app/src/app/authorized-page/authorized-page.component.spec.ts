import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedPageComponent } from './authorized-page.component';

describe('AuthorizedPageComponent', () => {
  let component: AuthorizedPageComponent;
  let fixture: ComponentFixture<AuthorizedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
