import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarryListaComponent } from './harry-lista.component';

describe('HarryListaComponent', () => {
  let component: HarryListaComponent;
  let fixture: ComponentFixture<HarryListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarryListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarryListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
