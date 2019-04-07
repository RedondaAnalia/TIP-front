import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullTransformer'
})
export class NullTransformerPipe implements PipeTransform {

  transform(value: any): any {
    return value ? value : 'N/E';
  }

}
