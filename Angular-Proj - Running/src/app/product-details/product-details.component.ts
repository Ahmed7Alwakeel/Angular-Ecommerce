import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductsService } from '../services/products.service';
import { StoreData,ICategory,IProduct,Discount } from '../viewModel/store-data';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from '../services/product-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  selectedProductId: number=0;
  products: IProduct | null=null;
  collectId: number[]=[];
  
  constructor(private activatedRoute: ActivatedRoute
            , private router: Router
            , private ProductsService: ProductsService
            , private location: Location
            ,private productApi:ProductApiService) { }

  ngOnInit(): void {
    // this.collectId=this.ProductsService.getProductId(); 
  
    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      this.selectedProductId=Number(paramMap.get('id'));
      // this.products=this.ProductsService.productById(this.selectedProductId); //static
      this.productApi.getProductByID(this.selectedProductId)  //using api   
      .subscribe(products=>{
        this.products=products;
      });
    });


   
  }

  goBack()
  {
    this.location.back();
  }

  prevProduct()
  {
    let selectedIndex=this.collectId.findIndex((i)=>i==this.selectedProductId);
    
    let previousId;
    if(selectedIndex>0)
    {
      previousId=this.collectId[selectedIndex-1];
      this.router.navigate(['/Products', previousId]);
    }
  }

  nextProduct()
  {
    let selectedIndex=this.collectId.findIndex((i)=>i==this.selectedProductId);
 
    let comingId;
    if(selectedIndex<this.collectId.length)
    {
      comingId=this.collectId[selectedIndex+1];
      this.router.navigate(['/product-details', comingId]);
    }
  }

}
