
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductsService } from '../services/products.service';
import { StoreData,ICategory,IProduct,Discount } from '../viewModel/store-data';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from '../services/product-api.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  selectedProductId: number=0;
  newProduct: IProduct | null=null;
  newProductt:IProduct={} as IProduct
  userName=""
  newx:IProduct[]=[]
  collectId: number[]=[];
  constructor(private activatedRoute: ActivatedRoute
            , private router: Router
            , private ProductsService: ProductsService
            , private location: Location,
            private productApi:ProductApiService) { }

  ngOnInit(): void {
    // this.collectId=this.ProductsService.getProductId();
  
    // this.activatedRoute.paramMap.subscribe((paramMap)=>{
    //   this.selectedProductId=Number(paramMap.get('id'));
    //   this.newProduct=this.ProductsService.productById(this.selectedProductId);
    // });


    // this.activatedRoute.paramMap.subscribe((paramMap)=>{
    //   this.selectedProductId=Number(paramMap.get('id'));
    //   // this.products=this.ProductsService.productById(this.selectedProductId); //static
    //   this.productApi.getProductByID(this.selectedProductId)  //using api   
    //   .subscribe(products=>{
    //     this.newProduct=products;
    //   });
    // });
  }

 

}