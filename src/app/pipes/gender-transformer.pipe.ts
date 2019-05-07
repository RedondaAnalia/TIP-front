import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderTransformer'
})
export class GenderTransformerPipe implements PipeTransform {

  transform(value: any): any {
    switch (value) {
      case 'MALE': return 'Macho';
      case 'FEMALE': return 'Hembra';
      default: return;
    }
  }

}
