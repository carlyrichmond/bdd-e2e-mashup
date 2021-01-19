import { Component, OnInit } from '@angular/core';
import { Record } from "./record";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.sass']
})
export class RecordComponent implements OnInit {

  public record: Record;

  constructor() { 
    this.record =  {
      title: 'Sam\s Town',
      artist: 'The Killers',
      genre: 'Indie Dance Rock',
      releaseYear: 2006
    }
  }

  ngOnInit(): void {
  }

}
