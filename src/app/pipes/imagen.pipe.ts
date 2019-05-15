import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagenPipe implements PipeTransform {

  transform( img: string): any {

    if (!img) {return '../../../assets/img/no-image.png'; }
      return img;
  }
}
