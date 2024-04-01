import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card-slider',
  templateUrl: './product-card-slider.component.html',
  styleUrls: ['./product-card-slider.component.css']
})
export class ProductCardSliderComponent {

  @Input() title:string | undefined;
  @Input() products:any[] | undefined;

  constructor(private router:Router) {

  }

  navigateToProducts(){
    console.log("navigate tot products")
    this.router.navigate(["/products"])
  }

}
