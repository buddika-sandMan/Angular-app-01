import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductCardComponent, NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    this.loadProductInformation();
  }

  public productInfo:any = [];

  async loadProductInformation() {
    this.http.get("https://fakestoreapi.com/products")
      .subscribe(data =>{
        this.productInfo = data;

        console.log(this.productInfo);
      })

    //  await fetch("https://fakestoreapi.com/products")
    //   .then(res => res.json())
    //   .then(data => {
    //   this.productInfo = data;
    // });
    
    // console.log(this.productInfo);

    // fetch("https://fakestoreapi.com/products")
    //   .then(this.handleResponse)

  //   fetch("https://fakestoreapi.com/products")
  //   .then((response) => { response.json())
  // }

  // handleResponse(response:Response) {
  //   return response.json()
  // }

  }
 
}
