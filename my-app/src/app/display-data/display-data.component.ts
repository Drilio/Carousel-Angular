import { Component } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent {
dataUrl:string='https://www.lemonde.fr/rss/une.xml'

  displayData(dataType:string) {
    switch (dataType) {
      case 'International': {
        this.dataUrl = 'https://www.lemonde.fr/international/rss_full.xml'
        break;
      }
      case 'Numérique':{
        this.dataUrl = 'https://www.lemonde.fr/pixels/rss_full.xml'
        break;
      }
      case 'Sports':{
        this.dataUrl = 'https://www.lemonde.fr/sport/rss_full.xml'
        break;
      }
      default:{
        this.dataUrl = 'https://www.lemonde.fr/rss/une.xml'
      }
    }
  }
  constructor() {}
}
