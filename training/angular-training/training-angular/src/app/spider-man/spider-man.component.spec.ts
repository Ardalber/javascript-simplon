import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiderManComponent } from './spider-man.component';

describe('SpiderManComponent', () => {
  let component: SpiderManComponent;
  let fixture: ComponentFixture<SpiderManComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpiderManComponent]
    });
    fixture = TestBed.createComponent(SpiderManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
