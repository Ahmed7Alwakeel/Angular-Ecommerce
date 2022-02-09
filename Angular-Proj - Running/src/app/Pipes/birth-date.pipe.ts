import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthDate'
})
export class BirthDatePipe implements PipeTransform {

  transform(value: string) {
    const date=value.substring(1, 7).split(/(.)/g).filter(s => s);
    const userDate=`${date[4]}${date[5]}-${date[2]}${date[3]}-19${date[0]}${date[1]}`
  return userDate
    
  }

}

