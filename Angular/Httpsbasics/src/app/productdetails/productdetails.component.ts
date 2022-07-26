import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productlist } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId:number = 0;
  currentProduct:productlist|undefined;
  constructor(private route:ActivatedRoute,private productService:ProductService) {
     
   }

  ngOnInit(): void {
    this.route.params.subscribe(d => {
      this.productId = d['id'];

      //Get the product for this id
      this.productService.getProductById(this.productId)
                        .subscribe(response => this.currentProduct = response);

    });
  }


}
