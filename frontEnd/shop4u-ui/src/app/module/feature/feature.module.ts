import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoAngularMaterailModule } from 'src/app/DemoAngularMaterialModule';
import { HomeComponent } from './components/home/home.component';
import { MainCarouselComponent } from './components/home/main-carousel/main-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderProductCardComponent } from './components/home/slider-product-card/slider-product-card.component';
import { ProductCardSliderComponent } from './components/home/product-card-slider/product-card-slider.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    MainCarouselComponent,
    SliderProductCardComponent,
    ProductCardSliderComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    DemoAngularMaterailModule,
    NgbModule,
    SharedModule
  ],
  exports : [
    HomeComponent,
    ProductsComponent
  ]
})
export class FeatureModule { }
