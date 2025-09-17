import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAndSearchbar } from './table-and-searchbar';

describe('TableAndSearchbar', () => {
  let component: TableAndSearchbar;
  let fixture: ComponentFixture<TableAndSearchbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableAndSearchbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAndSearchbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
