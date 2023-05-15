import {Component, ElementRef} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {ContentService} from "../content.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  aboutContent$: Observable<any> = EMPTY;

  constructor(private contentService: ContentService, private el: ElementRef) {
  }
  ngOnInit(): void {
    this.contentService.loadContentDataByName('about/content.json')
    this.aboutContent$ = this.contentService.getContentById('about');
  }

}
