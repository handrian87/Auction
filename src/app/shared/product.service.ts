import { Injectable } from '@angular/core';
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Product[] {
    return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  }
  getProductById(productId: number): Product {
    return <Product>products.find(p => p.id === productId);
  }
  constructor() { }
}

const products = [
  {
    'id': 0,
    'title': 'First Product',
    'price': 24.99,
    'rating': 4.3,
    'description':'This is a short description. Description of the product 1st. Nothing to say',
    'categories': ['electronics', 'hardware']
  },
  {
    'id': 1,
    'title': 'Second Product',
    'price': 20.99,
    'rating': 3.5,
    'description':'This is a short description. Description of the product 2nd. Nothing to say',
    'categories': ['books']
  },
  {
    'id': 3,
    'title': 'Third Product',
    'price': 55.0,
    'rating': 3.0,
    'description':'This is a short description. Description of the product 3rd. Nothing to say',
    'categories': ['sweet', 'short', 'jeans']
  },
  {
    'id': 4,
    'title': 'Fourth Product',
    'price': 38.75,
    'rating': 4.2,
    'description':'This is a short description. Description of the product 4rd. Nothing to say',
    'categories': ['pen','pencil']
  },
]
