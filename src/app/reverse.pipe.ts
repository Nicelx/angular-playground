import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any) {
    let arr = value.split('');
    arr.reverse();
    
    const result = arr.join('');
    console.log(result);
    return result;
  }

}
