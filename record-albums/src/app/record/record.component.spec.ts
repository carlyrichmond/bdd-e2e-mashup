import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordComponent } from './record.component';
import { Record } from './record';

describe('RecordComponent', () => {
  let component: RecordComponent;
  let fixture: ComponentFixture<RecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordComponent);
    component = fixture.componentInstance;

    fixture.componentInstance.record = {
      title: 'Sam\s Town',
      artist: 'The Killers',
      genre: 'Indie Dance Rock',
      releaseYear: 2006
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have record', () => {
    const expectedRecord: Record = {
      title: 'Sam\s Town',
      artist: 'The Killers',
      genre: 'Indie Dance Rock',
      releaseYear: 2006
    };

    fixture.detectChanges();
    expect(component.record).toEqual(expectedRecord);
  });

  it('should have another record', () => {
    const expectedRecord: Record = {
      title: 'One More Light',
      artist: 'Linkin Park',
      genre: 'Metal',
      releaseYear: 2017
    };

    fixture.componentInstance.record = {
      title: 'One More Light',
      artist: 'Linkin Park',
      genre: 'Metal',
      releaseYear: 2017
    };
    fixture.detectChanges();

    expect(component.record).toEqual(expectedRecord);
  });

});
