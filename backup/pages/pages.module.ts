import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TemplateSliderComponent } from './components/template-slider/template-slider.component';


@NgModule({
  declarations: [
    PagesComponent,
    TemplateSliderComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    PagesRoutingModule
  ],
  exports: [
    TemplateSliderComponent
  ]
})
export class PagesModule { }
