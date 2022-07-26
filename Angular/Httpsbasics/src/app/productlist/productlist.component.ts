import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { productlist } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products:productlist[] = [];

  constructor(private http:HttpClient,private productService:ProductService) { }

  ngOnInit(): void {
    this.productService
        .getProducts()
        .subscribe(response => {
          return this.products = response;
        });
  }


}
