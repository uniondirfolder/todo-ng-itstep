import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() filter: EventEmitter<boolean> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onTrue(value: boolean){
    this.filter.emit(value)
  }
  onFalse(value: boolean){
    this.filter.emit(value)
  }
}
