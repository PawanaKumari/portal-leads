import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartapiService {
  cartDataList: any = [];
  cartDataid:any=[]
  productlistid:any=[]
  productList = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) {}
  getProductData() {
    return this.productList.asObservable();
  }

  // setProduct(product: any) {
 
  //   this.cartDataList.push(...product);
  //   this.productList.next(product);
  // }
  addToCart(product: any) {
    this.cartDataList.push(product);
    this.productList.next(this.cartDataList);
    console.log(this.productList['value'], 'productList');
    var updatqty=this.productList['value']
   
     this.productlistid=updatqty.map((a:any)=>{
     return parseInt(a.id)
    })
    console.log(this.productlistid,"iddddddddd")
    this.getTotalAmount();
    
   this.cartDataid=this.cartDataList.map((idcart:any)=>{
return parseInt(idcart.id)
    })
    console.log(this.cartDataid,"cartDataid")
    var quan=this.cartDataid.length
    for(let i=0;i<quan;i++){
   
    }
   

    // console.log(this.cartDataList[Symbol.iterator],"list")
  }
  updateQuantity(){
    var quan=this.cartDataid.length
    // for(let i=0;i<=quan;i++){
    //   for(let i=0;i<this.productlistid.length;i++){
    //     if(this.productlistid[i]!==this.cartDataid[i]){
    //      return "False";
       
   
    //     }
    //    }
       
    // }
   
      return quan
   
    
  }
  getTotalAmount(): number {
    let grandTotal = 0;
    this.cartDataList.map((a: any) => {
      grandTotal += parseInt(a.total);
    });
    return grandTotal;
  }
  removeCartData(product: any) {
    this.cartDataList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartDataList.splice(index, 1);
      }
    });
    this.productList.next(this.cartDataList);
  }
  updatequantity(product: any ){
this.cartDataList.map((a:any,index:any)=>{
  if(product.id === a.id){
    console.log(product.id,"productid")
    console.log(a.id,"a.id")
  }
  
})
  }
  removeAllCart() {
    this.cartDataList = [];
    this.productList.next(this.cartDataList);
  }
}
function isEqual() {
  throw new Error('Function not implemented.');
}

