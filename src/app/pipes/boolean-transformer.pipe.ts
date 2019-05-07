import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanTransformer'
})
export class BooleanTransformerPipe implements PipeTransform {

  transform(value: string): any {
    return (value) ? 'Si' : 'No';
  }
}
