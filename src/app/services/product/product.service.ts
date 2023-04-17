import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient : HttpClient) { }

  async getProducts(){
    try {
      const url = 'https://api.baquipex.cl/Producto/GetProductosFull.php';

      return await this.httpclient.get(url).toPromise();
    } catch (error) {
      return "Error de Servidor - product.service (getProductFull) -";
    }
  }
}
