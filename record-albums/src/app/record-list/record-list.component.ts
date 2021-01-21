import { Component, OnInit } from '@angular/core';
import { Record } from '../record/record';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.sass']
})
export class RecordListComponent implements OnInit {

  public records: Record[];

  constructor() { 
    this.records = [
      {
        title: 'Sam\'s Town',
        artist: 'The Killers',
        genre: 'Indie Dance Rock',
        releaseYear: 2006,
        //albumCoverPath: '../../assets/images/the_killers_sams_town.jpg'
        
      },
      {
        title: 'Riot!',
        artist: 'Paramore',
        genre: 'Pop Punk',
        releaseYear: 2007,
        albumCoverPath: '../../assets/images/paramore_riot.jpg'
      }
    ]
  }

  ngOnInit(): void {
  }

}
