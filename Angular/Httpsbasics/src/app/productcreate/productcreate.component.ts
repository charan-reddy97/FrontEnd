import { Component, OnInit } from '@angular/core';
import { productlist } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {
  Product:any
  currentProduct:productlist = { producttitle:"",price : 0, id:0 };
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  saveProduct() : void
  {
      this.productService.addNewProduct(this.currentProduct);
  }

}
