import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-template-slider',
  templateUrl: './template-slider.component.html',
  styleUrls: ['./template-slider.component.scss']
})
export class TemplateSliderComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    center: true,
    margin: 20,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      },
      1400:{
        items: 4
      }
    },
    nav: true
  }
}
