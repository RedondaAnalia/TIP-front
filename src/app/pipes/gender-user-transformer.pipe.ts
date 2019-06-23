import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderUserTransformer'
})
export class GenderUserTransformerPipe implements PipeTransform {

  transform(value: any): any {
    switch (value) {
      case 'MALE': return 'Hombre';
      case 'FEMALE': return 'Mujer';
      case 'X': return 'No indicado';
      default: return;
    }
  }

}
