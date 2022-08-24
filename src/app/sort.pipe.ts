import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string) {
    const compare = (a, b) => {
      if (a[propName] < b[propName]) return -1;
      if (a[propName] > b[propName]) return 1;
      return 0;
    }
    const result = value.sort(compare);
    return result;
  }

}
