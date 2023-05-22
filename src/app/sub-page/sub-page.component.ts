import {Component, OnInit} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {ContentService} from "../content.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-page.component.html',
  styleUrls: ['./sub-page.component.scss']
})
export class SubPageComponent implements OnInit {
  main$: Observable<any> = EMPTY;
  carousel$: Observable<any> = EMPTY;
  products$: Observable<any> = EMPTY;
  pdf$: Observable<any> = EMPTY;

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute
  ) {
    const name = this.route.snapshot.paramMap.get('name');
    this.contentService.loadContentDataByName(`subpages/${name}.json`);
  }
  ngOnInit(): void {
    this.main$ = this.contentService.getContentById('main');
    this.carousel$ = this.contentService.getContentById('gallery');
    this.products$ = this.contentService.getContentById('products');
    this.pdf$ = this.contentService.getContentById('pdf');
  }
}
