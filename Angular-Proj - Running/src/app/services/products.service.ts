import { Injectable } from '@angular/core';
import { StoreData, ICategory, IProduct, Discount } from '../viewModel/store-data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public productList: IProduct[] = [
    // {
    //   categoryId: 2,
    //   id: 1,
    //   name: "Dell",
    //   quantity: 1,
    //   price: 5000,
    //   img: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    //   categoryName: "Labtop"
    // },

    // {
    //   categoryId: 2,
    //   id: 2,
    //   name: "Mac",
    //   quantity: 4,
    //   price: 50000,
    //   img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    //   categoryName: "Labtop"
    // },
    // {
    //   categoryId: 1,
    //   id: 3,
    //   name: "lenovo",
    //   quantity: 0,
    //   price: 3000,
    //   img: "https://images.unsplash.com/photo-1501162946741-4960f990fdf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    //   categoryName: "Mobile"
    // },
    // {
    //   categoryId: 1,
    //   id: 4,
    //   name: "Apple",
    //   quantity: 2,
    //   price: 3000,
    //   img: "https://images.unsplash.com/photo-1501162946741-4960f990fdf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    //   categoryName: "Mobile"
    // },
    // {
    //   categoryId: 2,
    //   id: 5,
    //   name: "Mac",
    //   quantity: 0,
    //   price: 50000,
    //   img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    //   categoryName: "Labtop"
    // },
    // {
    //   categoryId: 1,
    //   id: 6,
    //   name: "Apple",
    //   quantity: 2,
    //   price: 3000,
    //   img: "https://images.unsplash.com/photo-1501162946741-4960f990fdf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    //   categoryName: "Mobile",
    // },
  ];

  constructor() { }

  allProducts(): IProduct[] {
    return this.productList;
  }

  productCatID(categoryId: number): IProduct[] {
    if (categoryId == 0)
      return this.productList;
    else
      return this.productList.filter(pro => pro.categoryId == categoryId);
  }

  productById(productId: number): IProduct | null {
    let getProduct = this.productList.find(pro => pro.id == productId);
    return getProduct ? getProduct : null;
  }


  getProductId(): number[] {
    let productId: number[] = this.productList.map(pro => pro.id);
    return productId;
  }


  addNewProduct(newProduct: IProduct) {
    this.productList.push(newProduct);
  }
  
  updateProduct(pID: number) {
    for (let i = 0; i < this.productList.length; i++)
      if (pID == this.productList[i].id) {
        this.productList.splice(i, 1)
      }
  }



}
