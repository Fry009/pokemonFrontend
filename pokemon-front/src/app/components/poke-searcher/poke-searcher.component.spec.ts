import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeSearcherComponent } from './poke-searcher.component';

describe('PokeSearcherComponent', () => {
  let component: PokeSearcherComponent;
  let fixture: ComponentFixture<PokeSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeSearcherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
