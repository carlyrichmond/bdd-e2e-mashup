import { Component, OnInit } from '@angular/core';
import { Record } from '../record/record';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.sass']
})
export class RecordListComponent implements OnInit {

  private records: Record[];

  constructor() { 
    this.records = [
      {
        title: 'Sam\s Town',
        artist: 'The Killers',
        genre: 'Indie Dance Rock',
        releaseYear: 2006
      },
      {
        title: 'Riot!',
        artist: 'Paramore',
        genre: 'Pop Punk',
        releaseYear: 2007
      },
    ]
  }

  ngOnInit(): void {
  }

}
