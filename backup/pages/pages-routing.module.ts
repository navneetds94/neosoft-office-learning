import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {path:'', component: PagesComponent ,
  children:[
    {path: '', loadChildren: () => import('./page-list/home/home.module').then(m=> m.HomeModule) },
    {path: 'cv', loadChildren: () => import('./page-list/build-cv/build-cv.module').then(m => m.BuildCvModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
