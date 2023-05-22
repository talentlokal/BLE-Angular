import {Component, OnInit} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {ContentService} from "../content.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product$: Observable<any> = EMPTY;
  references$: Observable<any> = EMPTY;

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute
  ) {
    const name = this.route.snapshot.paramMap.get('name');
    this.contentService.loadContentDataByName(`products/${name}.json`);
  }
  ngOnInit(): void {
    this.product$ = this.contentService.getContentById('product');
    this.references$ = this.contentService.getContentById('references');
  }
}
