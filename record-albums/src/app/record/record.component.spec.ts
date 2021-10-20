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
      releaseYear: 2006,
      albumCoverPath: 'my_cover_image.jpg'
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
      releaseYear: 2006,
      albumCoverPath: 'my_cover_image.jpg'
    };

    fixture.detectChanges();
    expect(component.record).toEqual(expectedRecord);
  });

  it('should have updated record for re-released record', () => {
    const expectedRecord: Record = {
      title: 'Sam\s Town',
      artist: 'The Killers',
      genre: 'Indie Dance Rock',
      releaseYear: 2017,
      albumCoverPath: 'my_cover_image.jpg'
    };

    fixture.componentInstance.record.releaseYear = 2017;
    fixture.detectChanges();

    expect(component.record).toEqual(expectedRecord);
  });

  it('should default the albumCoverPath', () => {
    // Create new component for defaulting as prior one has a cover
    fixture = TestBed.createComponent(RecordComponent);
    component = fixture.componentInstance;

    fixture.componentInstance.record = {
      title: 'Sam\s Town',
      artist: 'The Killers',
      genre: 'Indie Dance Rock',
      releaseYear: 2006
    };

    fixture.detectChanges();

    expect(component.record.albumCoverPath).toBeDefined();
    expect(component.record.albumCoverPath).toEqual('../../assets/images/blank_record.jfif');
  });

});
