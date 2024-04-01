import { Component } from '@angular/core';
import { mensPantsPage1 } from 'src/Data/pants/men_page1';
import { ActivatedRoute, Router } from '@angular/router';
import { filters, singleFilter } from 'src/Data/FilterData';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {


  filterData:any;
  singleFilterData:any;
  menPants:any;


  constructor(private router:Router,private activatedRoute:ActivatedRoute){}

  ngOnInit(){
    this.filterData = filters;
    this.singleFilterData = singleFilter;
    this.menPants = mensPantsPage1;
  }


  handleMultipleSelectFilter(value:string, sectionId:string){

     // queryParams will hold all the params in url
     // example: http://localhost:4200/?product=shirt&color=white&size=small
     // result: {product: 'shirt', color: 'white', size: 'small'}
     const queryParams = {...this.activatedRoute.snapshot.queryParams};
     console.log("query params is: ", queryParams)

     // sectionId -> Color, Size, Price, Discount range
     // ? -> make sure if sectionId is present
     const filterValues = queryParams[sectionId]?queryParams[sectionId].split(","):[];
     console.log("filterValues is: ", filterValues)

     const valueIndex = filterValues.indexOf(value);

     if(valueIndex != -1){
       filterValues.splice(valueIndex,1);
     }else{
      filterValues.push(value);
     }

     if(filterValues.length > 0){
       queryParams[sectionId] = filterValues.join(",");
     }else{
       delete queryParams[sectionId];
     }

     this.router.navigate([],{queryParams});
  }


  handleSingleSelectFilter(value:string, sectionId:string){
    const queryParams = {...this.activatedRoute.snapshot.queryParams};
    queryParams[sectionId] = value;

    this.router.navigate([],{queryParams});
  }




}
