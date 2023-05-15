import {Component, ElementRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContentService} from "../../content.service";
import {EMPTY, Observable} from "rxjs";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactContent$: Observable<any> = EMPTY;
  contactForm: FormGroup = new FormGroup({});

  constructor(private contentService: ContentService, private el: ElementRef) {
  }

  ngOnInit(): void {
    this.contentService.loadContentDataByName('shared/contact.json')
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
    // Todo handle form submission
  }
}
