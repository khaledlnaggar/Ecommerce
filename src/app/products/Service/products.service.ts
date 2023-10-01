import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { environment } from 'src/environments/enivronments';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<IProduct[]> {
    return this.http.get<IProduct[]>(environment.baseApi + 'products')
  }
}
