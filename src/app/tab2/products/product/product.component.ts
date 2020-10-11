import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() Prod : Product;
  constructor() { }

  ngOnInit() {}

}
