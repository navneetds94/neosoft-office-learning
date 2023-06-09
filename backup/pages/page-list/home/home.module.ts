import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeFeaturesListComponent } from './home-features-list/home-features-list.component';
import { HomeTemplateListsComponent } from './home-template-lists/home-template-lists.component';
import { PagesModule } from "../../pages.module";


@NgModule({
    declarations: [
        HomeComponent,
        HomeBannerComponent,
        HomeFeaturesListComponent,
        HomeTemplateListsComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        PagesModule
    ]
})
export class HomeModule { }
