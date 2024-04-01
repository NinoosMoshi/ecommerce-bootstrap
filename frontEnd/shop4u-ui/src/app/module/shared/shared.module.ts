import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarContentComponent } from './components/navbar/navbar-content/navbar-content.component';
import { DemoAngularMaterailModule } from 'src/app/DemoAngularMaterialModule';
import { ProductCardComponent } from './components/product-card/product-card.component';




@NgModule({
  declarations: [
    NavbarComponent,
      NavbarContentComponent,
      ProductCardComponent
  ],
  imports: [
    CommonModule,
    DemoAngularMaterailModule,


  ],
  exports : [
    NavbarComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
