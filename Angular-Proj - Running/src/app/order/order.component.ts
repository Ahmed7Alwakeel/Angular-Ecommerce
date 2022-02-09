import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { catchError, filter, map, retry, Subscription } from 'rxjs';
import { AdvertisingService } from '../services/advertising.service';
import { ProductApiService } from '../services/product-api.service';
import { StoreData, ICategory, IProduct, Discount, IcartViewModel } from '../viewModel/store-data';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  discounut: Discount
  storeInfo: StoreData;
  date: Date;
 
  productList: IProduct[] = [];
  // private subscription!: Subscription;
  private subscriptions: Subscription[] = [];

  selectedCatId: number
  recviedTotalPrice: number = 0
  recviedCartApi: IcartViewModel = {} as IcartViewModel
  recviedCart: IcartViewModel[] = []

  orderPrice: number = 0

  public categories: ICategory[] = [
    // {
    //   id:1,
    //   name:"Mobile"
    // },
    // {
    //   id:2,
    //   name:"Labtop"  
    // }
  ]
  constructor(private alertAds: AdvertisingService,
    private snakBar: MatSnackBar,
    private productApi: ProductApiService) {
    this.storeInfo = new StoreData('Amazon',
      'assets/download.png',
      ['Cairo', 'Alex', 'Qena', 'Assiut']);
    this.date = new Date()
    this.selectedCatId = 0;
    this.discounut = Discount.two
  }

  ngOnInit(): void {
    this.productApi.getCatgeory()
      .subscribe(categories => {
        this.categories = categories;
      });
      this.productApi.getAllProducts() //using api
      .subscribe(products => {
        this.productList = products;
      });

    this.productApi.fillCart().subscribe((product) => {
      this.recviedCart = product;

      // this.recviedCart.push(this.recviedCartApi)
    })
    //  let observer={
    //     next:(data:string)=>{
    //       this.snakBar.open(data,'Delete',{
    //         duration:2000,
    //         verticalPosition:'top',
    //         horizontalPosition:'center',

    //       });

    //       // alert(data)
    //     },
    //     error: (err:string)=>{
    //       console.log(err);
    //     },
    //     complete:()=>{
    //       this.snakBar.open("Thank You",'Delete',{
    //         duration:2000,
    //         verticalPosition:'top',
    //         horizontalPosition:'center',

    //       });

    //     }
    //   };
    //   this.alertAds.getScheduledAds(3).subscribe(observer);


  }

  getPrice(totalPrice: number) {
    this.recviedTotalPrice = totalPrice
  }

  ///static
  addCart(product: IcartViewModel) {
    let isExist = false;
    for (let i of this.recviedCart) {
      if (product.id == i.id) {
        isExist = true;
      }

    }
    if (isExist == false)
      this.recviedCart.push(product)
  }


  buyProduct(pID: number, price: number, count: string) {
    this.orderPrice += +count * price;
    for (let i = 0; i < this.recviedCart.length; i++) {
      if (pID == this.recviedCart[i].id) {
 
      }

    }

  }

  removeProduct(pID: number, count: string, price: number) {
    for (let i = 0; i < this.recviedCart.length; i++) {
      if (pID == this.recviedCart[i].id) {
        this.productApi.deleteFromCart(pID).subscribe(() => {
          this.recviedCart.splice(i, 1)
          this.orderPrice -= +count * price
        })

      }

    }
  }

  confirmOrder() {
   
    for (let i = 0; i < this.recviedCart.length; i++) {
     
        this.productApi.deleteFromCart(this.recviedCart[i].id).subscribe(() => {
          this.recviedCart.splice(i)
          this.orderPrice = 0;

        })
        for(let x of this.productList){
          if(this.recviedCart[i].id==x.id){
            x.quantity-=this.recviedCart[i].count
            this.productApi.updateProduct(x.id,x).subscribe(()=>{
           
              setTimeout(() => {
                location.reload();
              }, 500);
  
            })
          
          }

          this.snakBar.open("Thank You", 'Delete', {
            duration: 1000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
        }
        

      }
     
  }


  ngOnDestroy(): void {
    //  this.subscription.unsubscribe();
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
