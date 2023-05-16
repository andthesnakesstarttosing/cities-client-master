import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() searchValue = new EventEmitter<string>();
  @Input() value!: string;
  searchTerm!: string;
  ngOnInit(): void {
    this.searchTerm = this.value;
  }

  onSearch() {
    this.searchValue.emit(this.searchTerm);
  }
}
