import { Component, OnInit } from '@angular/core';
import { ProductoFull } from 'src/app/models/productoFull';
import { ResponseApi } from 'src/app/models/responseApi';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.scss']
})
export class PageAboutComponent implements OnInit {

  dataProduct: Array<ProductoFull> | any = [
    {
      id_producto: '1',
      nombre_producto: 'Hola Mundo'
    }
  ];

  constructor(private productService: ProductService) {
    //this.getListProductsFull();
   }

  async ngOnInit() {
    //await this.getListProductsFull();
  }

  async getListProductsFull(){
    const res:  ResponseApi | any = await this.productService.getProducts();
    this.dataProduct = await res.data;

    console.log(this.dataProduct);
    
  }

}
