import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/Models/product.models';
import { AnnoncesService } from 'src/app/Services/annonces.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  Products : Product[]=[];
  constructor(private ProductService : ProductsService) { }

  ngOnInit() {
    
    let ProductsSubsc : Subscription = this.ProductService.ProductsSubject.subscribe(
      (Prods: Product[])=>{
       
        this.Products= Prods;
    })


  }

}
