import { Component, OnInit } from '@angular/core';
import { StoreData,ICategory,IProduct,Discount,IcartViewModel } from '../viewModel/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  storeInfo: StoreData;
  constructor() { 
    this.storeInfo=new StoreData('Amazon',                
    'assets/download.png',
    ['Cairo', 'Alex', 'Qena', 'Assiut']);
  }


  ngOnInit(): void {
  }

}
