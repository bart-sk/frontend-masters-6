import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getAge'
})
export class GetAgePipe implements PipeTransform {

  transform(value: number, args?: any): any {
    console.log('pipe getAge');
    return (new Date()).getFullYear() - value;
  }

}
