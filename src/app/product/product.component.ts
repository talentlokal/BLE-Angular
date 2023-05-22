import {Component, OnInit} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {ContentService} from "../content.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product$: Observable<any> = EMPTY;
  references$: Observable<any> = EMPTY;

  constructor(private contentService: ContentService) {
  }
  ngOnInit(): void {
    this.contentService.loadContentDataByName('products/product.json')
    this.product$ = this.contentService.getContentById('product');
    this.references$ = this.contentService.getContentById('references');
  }
}
