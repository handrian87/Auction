import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/Product";

@Component({
  selector: 'nga-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() tres: Product | null = null;
}
