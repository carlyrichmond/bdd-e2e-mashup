import { Component, Input, OnInit } from '@angular/core';
import { Record } from "./record";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.sass']
})
export class RecordComponent implements OnInit {

  @Input()
  public record!: Record;

  constructor() { 

  }

  ngOnInit(): void {
  }

}
