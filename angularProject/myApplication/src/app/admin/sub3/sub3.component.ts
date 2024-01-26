import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-sub3',
  templateUrl: './sub3.component.html',
  styleUrls: ['./sub3.component.css']
})
export class Sub3Component {
  stdData2:any;
  constructor(private dataService :DataService){}

  ngOnInit(){
    this.dataService.studentData.subscribe(data=>{
      this.stdData2=data
    })
  }
}
