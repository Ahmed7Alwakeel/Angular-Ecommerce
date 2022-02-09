import { Component, OnInit } from '@angular/core';
import { StoreData,ICategory,IProduct,Discount,IcartViewModel } from '../viewModel/store-data';

@Component({
  selector: 'app-logout',
  templateUrl: './home.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  storeInfo: StoreData;
  constructor() { 
    this.storeInfo=new StoreData('Amazon',                
    'assets/download.png',
    ['Cairo', 'Alex', 'Qena', 'Assiut']);
  }

  ngOnInit(): void {
  }

}
