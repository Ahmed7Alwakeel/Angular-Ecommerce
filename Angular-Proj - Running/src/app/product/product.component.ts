import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductApiService } from '../services/product-api.service';
import { ProductsService } from '../services/products.service';
import { StoreData, ICategory, IProduct, Discount, IcartViewModel } from '../viewModel/store-data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {

  getProduct: IProduct[];
  public selectCat: number = 0;
  public nationalId: string = ""
  public criedtCard: string = ""
  orderPrice: number = 0
  productList: IProduct[] = [];
  productTest: IProduct = {} as IProduct

  @Input() recivedCatId: number = 0
  @Output() collectedPrice: EventEmitter<number>;
  @Output() cartProducts: EventEmitter<IcartViewModel>;


  isProductShown: boolean = true;
  isShown: boolean = true;
  public buy: string = "Buy Now";
  public name: string = ""
  public clientName: string = "Client1"
  cart: IProduct[] = []
  oneTime: boolean = false;
  // count:string=""

  constructor(private productsService: ProductsService,
    private productApi: ProductApiService
    , private route: Router,
    private snakBar: MatSnackBar) {

    this.getProduct = [];
    //34an ygbly al products kamla aw ma3ml load
    this.collectedPrice = new EventEmitter<number>()
    this.cartProducts = new EventEmitter<IcartViewModel>()


  }

  ngOnChanges(): void {
    // this.productList = this.productsService.productCatID(this.recivedCatId);   //using static service
    
    this.productApi.getProductsByCatID(this.recivedCatId) //using api
      .subscribe(products => {
        this.productList = products;
      });

  }

  ngOnInit(): void {
    this.productApi.getAllProducts() //using api
      .subscribe(products => {
        this.productList = products;
      });
    // this.productList = this.productsService.allProducts(); //static
  }
  toggleProduct() {
    this.isProductShown = !this.isProductShown;
    if (this.buy == "Buy Now") {
      this.buy = "Thanks"
    }
    else {
      this.buy = "Buy Now"
    }

  }
  toggleShow() {
    this.isShown = !this.isShown;
  }

  // changeQuantity(productPrice:number,count:string){

  // this.orderPrice+=+count*productPrice

  // //exute event
  // this.collectedPrice.emit(this.orderPrice) //emit function in eventEmitter

  // }

  /////////////////////
  //using in order
  // buyProduct(price: number, count: string) {
  //   this.orderPrice += +count * price;
  //   // this.oneTime=true;
  // }

  // removeProduct(pID: number,count: string,price:number) {
  //   for (let i = 0; i < this.cart.length; i++) {
  //     if (pID == this.cart[i].id) {
  //       this.cart.splice(i, 1)
  //       this.orderPrice-= +count * price
  //     }

  //   }
  // }
  //////////////////////


  //static

  // addToCart(product: IProduct,countValue:number) {
  //   let addProduct={
  //     categoryId:product.categoryId,
  //   id:product.id, 
  //   name:product.name, 
  //   quantity:product.quantity, 
  //   price:product.price,
  //   img:product.img,
  //   categoryName:product.categoryName,
  //   count:countValue
  //   }
  //   let isExist = false;
  //   for (let i of this.cart) {
  //     if (product.id == i.id) {
  //       isExist = true;
  //     }

  //   }
  //   if (isExist == false)
  //     this.cart.push(product)

  //    this.cartProducts.emit(addProduct)
  // }

//////////////////////

//using API
  addToCart(id: number, countValue: number) {  
    let isExist = false;
    for (let i of this.productList) {
      if (id == i.id) {
        // isExist=true
        this.snakBar.open("Product Already in Cart", 'Delete', {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });

      }
    }
    if (isExist == false) {
      for (let i = 0; i < this.productList.length; i++) {
        if (id == this.productList[i].id) {
          this.productTest = this.productList[i]
          let addProduct = {
            categoryId: this.productTest.categoryId,
            id: this.productTest.id,
            name: this.productTest.name,
            quantity: this.productTest.quantity,
            price: this.productTest.price,
            img: this.productTest.img,
            categoryName: this.productTest.categoryName,
            count: countValue
          }
          this.productApi.addToCart(addProduct).subscribe(() => {
            this.snakBar.open("Product Added to cart Successfully", 'Delete', {
              duration: 2000,
              verticalPosition: 'top',
              horizontalPosition: 'center',

            });
            setTimeout(() => {
              location.reload();
            }, 500);

          })

        }
      }
    }


  }



  // getCount(){
  //   for(let i of this.productList){
  //     this.count
  //   }
  // }



  deleteProduct(id: number) {
    //using API
    let answer = confirm('Are you sure?')
    if (answer) {
      this.productApi.deleteProduct(id)
        .subscribe(() => {

          for (let i = 0; i < this.productList.length; i++) {
            if (id == this.productList[i].id) {
              this.productList.splice(i, 1)
            }
          }
          this.snakBar.open("Product Deleted Successfully", 'Delete', {
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'center',

          });
        });
    }
    else {
      this.snakBar.open("Delete Stopped", 'Delete', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center',

      });
    }


  }





}

