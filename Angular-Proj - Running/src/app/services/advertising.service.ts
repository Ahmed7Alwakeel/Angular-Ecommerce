import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertisingService {

  private advertisingAlerts: string[];
  constructor() {
    this.advertisingAlerts=["catch the Discount"
                 , "Get the chance"
                 , "Sale up to 75%"
                 , "Harry up"
                 ];
   }

   getScheduledAds(intervalInSeconds: number):Observable<string>
   {
      return new Observable <string>((observer)=>{
        // observer.next();
        // observer.error();
        // observer.complete();
        let counter=0;
        let adsTimer= setInterval(()=>{
          
          if (counter==this.advertisingAlerts.length)
          {
            observer.complete();
          }
          if(this.advertisingAlerts[counter] =="")
          {
            observer.error("Error: Empty Ad.");// Will stop Observable
          }

          observer.next(this.advertisingAlerts[counter]);
          counter++;
        },intervalInSeconds*1000);

        return {
          unsubscribe(){
            //Will be called:
              // 1- Error
              // 2- Complete
              // 3- unsubscribe()
            clearInterval(adsTimer);
            console.log("In Obs Unsubscribe...")
          }
        }
      });
   }

   getSerialAds(): Observable<string>
   {
    //  return of("ad1", "ad2", "ad3");
     return from(this.advertisingAlerts)
   }












}
