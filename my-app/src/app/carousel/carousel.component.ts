import { Component, Input } from '@angular/core';
import { data } from './data';
import { helper} from "../helper/helper";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  xmlToDom = this.helper.parseXML(data);

  public slides= this.xmlToDom;

  constructor(private helper:helper) {

  }


  currentSlide = 0;


  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("xmlToDom: ", this.xmlToDom);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("xmlToDom: ", this.xmlToDom);
  }
}
