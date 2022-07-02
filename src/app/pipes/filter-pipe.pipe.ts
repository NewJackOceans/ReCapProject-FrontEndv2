import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Brand } from '../models/brand';
import { Car } from '../models/car';
import { Color } from '../models/color';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Car[], filterText:string): Car[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:Car) => c.carName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
  transform1(value: Brand[], filterText:string): Brand[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((brand:Brand) => brand.brandName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
  transform2(value: Color[], filterText:string): Color[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((color:Color) => color.colorName.toLocaleLowerCase().indexOf(filterText)!==-1):value;

  }

}

//map/filter