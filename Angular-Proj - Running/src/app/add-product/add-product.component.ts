import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ICategory, IProduct } from '../viewModel/store-data';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductApiService } from '../services/product-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  newProduct:IProduct={} as IProduct
  productList: IProduct[] = [];
  public categories:ICategory[]=[]
  
   
  
  constructor(private productService:ProductsService,
    private snakBar:MatSnackBar
    ,private router: Router,
    private productApi:ProductApiService) {

   }

  ngOnInit(): void {
    this.productApi.getCatgeory()
    .subscribe(categories=>{
      this.categories=categories;     
    });
    
  }
  // addProduct(){
  //   let sameId;
  //   for(let i of this.productService.getProductId()){
  //     if(i==this.newProduct.id){
  //       sameId=i;
  //     }
  //   }
  //   if(sameId==this.newProduct.id){
      
  //     this.snakBar.open("Product already Exist",'Delete',{
  //       duration:2000,
  //       verticalPosition:'top',
  //       horizontalPosition:'center',

  //     });
  //     // this.productService.updateProduct(sameId)
  //     // this.productService.addNewProduct(this.newProduct)
      
  //   }else{
  //     this.productService.addNewProduct(this.newProduct)
   
  //     this.snakBar.open("Added Product successfuly",'Delete',{
  //       duration:2000,
  //       verticalPosition:'top',
  //       horizontalPosition:'center',

  //     });
  //     this.router.navigate(['/order']);
  //   }

  // }



  addProduct(){
    this.productApi.getAllProducts() //using api
    .subscribe(products=>{
      this.productList=products;
    });
    let sameId;
      
      for(let i=0;i<this.productList.length;i++){
        if(this.productList[i].id==this.newProduct.id){
          sameId=this.productList[i].id;
        }
      }
      if(sameId==this.newProduct.id){
        this.snakBar.open("Product already Exist",'Delete',{
                duration:2000,
                verticalPosition:'top',
                horizontalPosition:'center',
        
              });
      }else{
        this.productApi.addProduct(this.newProduct).subscribe(()=>{
          this.snakBar.open("Added Product successfuly",'Delete',{
                  duration:2000,
                  verticalPosition:'top',
                  horizontalPosition:'center',
          
                });
                this.router.navigate(['/order']);

        })
      }

    
  }
 

}
