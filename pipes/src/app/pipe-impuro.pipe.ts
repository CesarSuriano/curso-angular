import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeImpuro'
})
export class PipeImpuroPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
