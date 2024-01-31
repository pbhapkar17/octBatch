import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(tableData: any, inputBoxValue: any): any {
      let inpVal = inputBoxValue.toLowerCase();
      return tableData.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(inpVal)
    })

  }

}
