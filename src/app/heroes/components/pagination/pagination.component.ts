import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() public current: number;
  @Input() public total: number;
  @Output() public goTo = new EventEmitter<number>();
  public base: number[];
  constructor() { }

  ngOnInit() {
    this.base = this.createBase(this.total);
  }

  public createBase(total: number) {
    const numbers = [];
    return Array(total).fill(numbers).map((x, i) => i + 1);
  }

  public navigate(page: number) {
    this.goTo.emit(page);
  }
}
