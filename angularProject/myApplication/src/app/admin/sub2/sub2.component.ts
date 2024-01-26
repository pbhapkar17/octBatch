import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.css']
})
export class Sub2Component {
  constructor(private dataService :DataService){}
  stdData1:any;
  ngOnInit(){
    this.dataService.studentData.subscribe(data=>{
      this.stdData1 = data
    })
  }
}
