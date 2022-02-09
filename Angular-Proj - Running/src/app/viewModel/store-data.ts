export class StoreData {
    
    
    constructor(public name:string
              , public imgURL:string
              , public branches: string[])
    {
      
    }
  }
  
  export interface IProduct { 
    categoryId:number,
    id:number, 
    name:string, 
    quantity:number, 
    price:number,
    img:string,
    categoryName:string,
    
    
  };
  export interface IcartViewModel { 
    categoryId:number,
    id:number, 
    name:string, 
    quantity:number, 
    price:number,
    img:string,
    categoryName:string,
    count:number
    
    
  };

  export interface ICategory { 
    id:number, 
    name:string, 
    
  };

  export enum Discount{
      one="15%",
      two="10%",
      three="No Discount Now"
  }