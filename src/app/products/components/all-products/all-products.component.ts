import { Component , OnInit } from '@angular/core';
import { ProductsService } from '../../Service/products.service';
import { IProduct } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products:IProduct[] = []
  constructor(private service:ProductsService) {}
  
  ngOnInit(): void{
    this.getProducts()
  }
  
  getProducts() {
    this.service.getAllProducts().subscribe((res:IProduct[]) => {
      this.products = res
    } )
  }
  
  
}
