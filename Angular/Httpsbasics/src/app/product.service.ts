import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from './baseurl';
import { productlist } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //Product:productlist[]=[]

  constructor(private http:HttpClient) 
  {

  }
  getProducts() : Observable<productlist[]>
  {
    let client = this.http
                    .get<productlist[]>( baseUrl + "/products");

     return client;
  }

  addNewProduct(product:productlist) : productlist
  {
      let client = this.http.post(baseUrl + "/products",product);
      client.subscribe();
      return product;
  }
  getProductById(id:number) : Observable<productlist>
  {
      let client = this.http
                      .get<productlist>( baseUrl + "/products/" + id);

      return client;
  }


}
