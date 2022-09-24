import { Component, OnInit } from '@angular/core';
import { Categories, Product } from 'src/product';
import { NgForm } from "@angular/forms";
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent implements OnInit {
  @Output()add = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  name:string = "";
  price:number = 0;
  description:string = "";

  newProduct:Product=new Product();

  products:Product[]=[]
  

  addProduct(form: NgForm) {
    this.add.emit(this.newProduct);
    this.newProduct=new Product();
  }

  categories = Object.keys(Categories);
}