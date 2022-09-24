import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { products,Product,Categories} from 'src/product';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-reactive-form',
  templateUrl: './product-reactive-form.component.html',
  styleUrls: ['./product-reactive-form.component.css']
})
export class ProductReactiveFormComponent implements OnInit {

  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  myForm: FormGroup = new FormGroup({
    "prName": new FormControl("", [Validators.required, Validators.minLength(5)]),
    "prPrice": new FormControl("", [Validators.required]),
    "prDesc": new FormControl("", [Validators.required]),
    "prCateg":new FormControl(Categories.NO,[Validators.required])
  });

  addProduct(form: FormGroup) {
    let name = form.controls["prName"].value;
    let price = form.controls["prPrice"].value;
    let desc = form.controls["prDesc"].value;
    let image_url = "https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/05/Samsung-Galaxy-S22.png?w=660&ssl=1";
    let category = form.controls["prCateg"].value;
    this.add.emit({id: Date.now(), price: price, description: desc, name: name,image_url:"https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/05/Samsung-Galaxy-S22.png?w=660&ssl=1",category:category});
  }
  categories = Object.keys(Categories);
}