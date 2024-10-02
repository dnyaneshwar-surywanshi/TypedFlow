import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count1'
})
export class Count1Pipe implements PipeTransform {

  transform(val: number): number {
    return val.toString().length ;
  }
}
