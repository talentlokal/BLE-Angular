import {Component, ElementRef, OnInit} from '@angular/core';
import {ContentService} from "./content.service";
import {EMPTY, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  footerContent$: Observable<any> = EMPTY;
  menuContent$: Observable<any> = EMPTY;

  constructor(private contentService: ContentService, private el: ElementRef) {}

  ngOnInit(): void {
    this.contentService.loadContentDataByName('home/menu.json')
    this.menuContent$ = this.contentService.getContentById('menu');

    this.contentService.loadContentDataByName('home/footer.json')
    this.footerContent$ = this.contentService.getContentById('footer');
  }
}
