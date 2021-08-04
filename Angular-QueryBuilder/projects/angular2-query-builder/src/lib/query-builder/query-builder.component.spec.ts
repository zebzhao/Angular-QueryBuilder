import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, } from '@angular/forms';
import { QueryBuilderComponent } from './query-builder.component';

describe('QueryBuilderComponent', () => {
  let component: QueryBuilderComponent;
  let fixture: ComponentFixture<QueryBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CommonModule, FormsModule ],
      declarations: [ QueryBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
