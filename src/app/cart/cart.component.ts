import { Component, OnInit } from '@angular/core';
import { CartapiService } from '../services/cartapi.service';
import { UsersserviceService } from '../services/usersservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
products:any=[];
allProducts:any=0;
quantity:any=0
  constructor(private cartApi:CartapiService,
    private userservice:UsersserviceService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe((res)=>{
this.products=res;
this.allProducts=this.cartApi.getTotalAmount();
this.quantity=this.cartApi.updateQuantity();
    })
  }
  removeProduct(item:any){
this.cartApi.removeCartData(item);
  }
  removeAllProduct(){
    this.cartApi.removeAllCart();
  }
  updateQuantity(product:any){
    this.cartApi.updatequantity(product);
    console.log(product,"prooooo")
  }


}
