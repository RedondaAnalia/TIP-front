import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {

  transform(value: string): any {
    const dates = value.split( '-' );
    return dates[2].slice(0, 2) + '-' + dates[1] + '-' + dates[0];
  }
}

