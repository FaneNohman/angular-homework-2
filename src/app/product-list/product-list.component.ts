import { Component, Input, OnInit } from '@angular/core';
import { products,Product} from 'src/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit(): void {
  }
  onProductRemove(id:number){
    this.products =this.products.filter(x=>x.id!==id);
  }
  addProduct(pr:Product) {
    this.products.push(pr);
  }
}
