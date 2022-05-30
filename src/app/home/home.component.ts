import { Component, OnInit } from '@angular/core';
import { UsersserviceService } from 'src/app/services/usersservice.service';
import { CurrencyPipe } from '@angular/common';
import { CartapiService } from '../services/cartapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  names: any;
  POSTS: any;
  productList: any;
  totalPrice: number = 0;
  cartDataid:number | undefined
productlistid:number | undefined
quan:number | undefined
  constructor(
    private userservice: UsersserviceService,
    public currencypipe: CurrencyPipe,
    private cartApi: CartapiService
  ) {}
  ngOnInit(): void {
    let total = 0;
    this.userservice.getUsers().subscribe((response: any) => {
      this.POSTS = response;
      this.POSTS.forEach((a:any)=>{
   
        Object.assign(a,{quantity:1,total:a.productprice})
        // console.log(a.id,"quantity")
        // let finalArray=[]
        // finalArray.push(a.id)
        // console.log(finalArray,"finalArrr")
     
      
     
      
      })
 
    });
  }

  addtoCart(item: any) {
   
    this.cartApi.addToCart(item);
  }
  //Slider settings
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };
}
