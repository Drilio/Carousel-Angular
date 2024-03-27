import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { helper} from "../helper/helper";
import {trigger, transition, useAnimation} from "@angular/animations";
import {
   scaleIn, scaleOut,
} from "./carousel.animations";
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => *", [useAnimation(scaleIn, {params: { time: '500ms' }} )]),
      transition("* => void", [useAnimation(scaleOut, {params: { time: '500ms' }})]),
    ])
  ]
})


export class CarouselComponent implements OnChanges{
  @Input() dataUrl!:string
  data: Document | undefined;
  public slides: string[] | undefined;

  ngOnChanges(changes:SimpleChanges){
    this.initialize()
    console.log('toto')
    console.log(this.dataUrl)
  }
  constructor(private helper: helper) {
  this.initialize()
  }

  async initialize() {
    this.data = await this.helper.getData(this.dataUrl);
    this.slides = this.helper.parseXML(this.data);
  }



  currentSlide = 0;


  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides!.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides!.length ? 0 : next;
  }
}
