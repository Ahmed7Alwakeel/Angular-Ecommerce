import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'criedtCard'
})

export class NumberfrPipe implements PipeTransform {

  transform(value: string){
    
    return value.replace(/(.{4})/g,"$1-")
    
  }
}



