import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MopinionFormComponent } from './mopinion-form.component';

describe('MopinionFormComponent', () => {
  let component: MopinionFormComponent;
  let fixture: ComponentFixture<MopinionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MopinionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MopinionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
