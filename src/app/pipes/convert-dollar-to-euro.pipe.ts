import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDollarToEuro'
})
export class ConvertDollarToEuroPipe implements PipeTransform {

  transform(value: number, rate: number = 1.01): number {
    return parseFloat((value * rate).toFixed(2));
  }

}
