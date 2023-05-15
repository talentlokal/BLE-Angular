import {Component, ElementRef} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {ContentService} from "../content.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  landingContent$: Observable<any> = EMPTY;
  servicesContent$: Observable<any> = EMPTY;
  galleryImages$: Observable<any> = EMPTY;
  aboutContent$: Observable<any> = EMPTY;
  bernhardContent: Observable<any> = EMPTY;
  contactContent$: Observable<any> = EMPTY;

  contactForm: FormGroup = new FormGroup({});

  constructor(private contentService: ContentService, private el: ElementRef) {
  }

  ngOnInit(): void {
    this.contentService.loadContentDataByName('home/content.json')
    this.landingContent$ = this.contentService.getContentById('landingSection');
    this.servicesContent$ = this.contentService.getContentById('services');
    this.galleryImages$ = this.contentService.getContentById('galleryImages');
    this.aboutContent$ = this.contentService.getContentById('aboutSection');
    this.bernhardContent = this.contentService.getContentById('bernhard');
    this.contactContent$ = this.contentService.getContentById('contact');

    this.contactForm = new FormGroup({
      'contact-name': new FormControl(null, Validators.required),
      'contact-email': new FormControl(null, [Validators.required, Validators.email]),
      'contact-subject': new FormControl('product-questions', Validators.required),
      'contact-phone': new FormControl(null, Validators.required),
      'contact-message': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    // Handle form submission
  }
}
