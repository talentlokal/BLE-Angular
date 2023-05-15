import {Component, OnInit} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {ContentService} from "../content.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  landingContent$: Observable<any> = EMPTY;
  servicesContent$: Observable<any> = EMPTY;
  galleryImages$: Observable<any> = EMPTY;
  aboutContent$: Observable<any> = EMPTY;
  bernhardContent: Observable<any> = EMPTY;

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.contentService.loadContentDataByName('home/content.json')
    this.landingContent$ = this.contentService.getContentById('landingSection');
    this.servicesContent$ = this.contentService.getContentById('services');
    this.galleryImages$ = this.contentService.getContentById('galleryImages');
    this.aboutContent$ = this.contentService.getContentById('aboutSection');
    this.bernhardContent = this.contentService.getContentById('bernhard');
  }
}
