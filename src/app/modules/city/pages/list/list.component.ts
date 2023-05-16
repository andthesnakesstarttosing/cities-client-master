import { Component, OnInit } from '@angular/core';
import { CityService } from '../../service/city.service';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { IPageResponse } from 'src/app/models/page.response';
import { ICity } from 'src/app/models/city.model';

@Component({
  selector: 'app-city-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class CityListComponent implements OnInit {
  public searchQuery: string = '';
  public cities$!: Observable<IPageResponse<ICity>>;
  public cols: number = 4;
  handlePageEvent($event: PageEvent) {
    this.service.page = $event.pageIndex;
    this.cities$ = this.service.findByPage();
  }
  onSearch(value: string) {
    this.service.searchQuery = value;
    this.cities$ = this.service.findByPage();
  }
  constructor(
    private readonly service: CityService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.searchQuery = service.searchQuery;
  }

  ngOnInit() {
    this.cities$ = this.service.findByPage();
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = 1;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = 2;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = 3;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = 4;
        }
      });
  }
}
