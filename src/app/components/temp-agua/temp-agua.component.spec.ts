import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempAguaComponent } from './temp-agua.component';

describe('TempAguaComponent', () => {
  let component: TempAguaComponent;
  let fixture: ComponentFixture<TempAguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempAguaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
