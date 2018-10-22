
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtDashboardComponent } from './ft-dashboard.component';

describe('FtDashboardComponent', () => {
  let component: FtDashboardComponent;
  let fixture: ComponentFixture<FtDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FtDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FtDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
