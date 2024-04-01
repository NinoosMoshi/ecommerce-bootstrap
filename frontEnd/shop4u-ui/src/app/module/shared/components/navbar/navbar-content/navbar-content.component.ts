import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { navigation } from 'src/Data/navbarMenu';


@Component({
  selector: 'app-navbar-content',
  templateUrl: './navbar-content.component.html',
  styleUrls: ['./navbar-content.component.css']
})
export class NavbarContentComponent {


  @Input() selectedSection!: string;

  category:any;

  constructor(private router:Router){
    this.category = navigation
  }

  navigateToProducts=(path:String)=>{
    this.router.navigate([path])

  }



}
