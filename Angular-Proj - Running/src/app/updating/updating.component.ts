import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductsService } from '../services/products.service';
import { StoreData, ICategory, IProduct, Discount } from '../viewModel/store-data';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from '../services/product-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-updating',
  templateUrl: './updating.component.html',
  styleUrls: ['./updating.component.scss']
})
export class UpdatingComponent implements OnInit {
  selectedProductId: number = 0;
  // newProduct!: IProduct
  newProduct: IProduct = {} as IProduct
  productList: IProduct[] = [];
  collectId: number[] = [];
  public categories: ICategory[] = []
  constructor(private activatedRoute: ActivatedRoute
    , private router: Router,
    private snakBar: MatSnackBar

    , private ProductsService: ProductsService
    , private location: Location,
    private productApi: ProductApiService) { }

  ngOnInit(): void {
    this.productApi.getCatgeory()
      .subscribe(categories => {
        this.categories = categories;
      });

    // this.collectId=this.ProductsService.getProductId();


    //activatedRoute to get information about route that assoicated with component
    //paramMap is an observable to access parameters of route 
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.selectedProductId = Number(paramMap.get('id')); //get to retrive single value,,getAll to get multi values

      // this.products=this.ProductsService.productById(this.selectedProductId);    //static

      this.productApi.getProductByID(this.selectedProductId)    //using api   
        .subscribe(products => {
          this.newProduct = products;
        });
    });
  }











  updateProduct(id: number) {
    this.productApi.updateProduct(id, this.newProduct).subscribe(() => {
    
      this.snakBar.open("updated Product successfuly", 'Delete', {
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
    
          });
          setTimeout(()=>{
            this.router.navigate(['/order']);
          },1500)
    })



    //// without patching

    // this.productApi.deleteProduct(this.newProduct.id)
    //   .subscribe(() => {
    //     for (let i = 0; i < this.productList.length; i++) {
    //       if (this.newProduct.id == this.productList[i].id) {
    //         this.productList.splice(i, 1)
    //       }
    //     }
    //   })

    // this.productApi.addProduct(this.newProduct).subscribe(() => {
    //   this.snakBar.open("updated Product successfuly", 'Delete', {
    //     duration: 2000,
    //     verticalPosition: 'top',
    //     horizontalPosition: 'center',

    //   });
    //   setTimeout(()=>{
    //     this.router.navigate(['/order']);
    //   },1500)

    // })


  }




}
