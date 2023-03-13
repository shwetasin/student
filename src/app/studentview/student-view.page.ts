import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.page.html',
  styleUrls: ['./student-view.page.scss'],
})
export class StudentViewPage implements OnInit {

  studentlist: any;
  value: any;
  id: any;
  view:any
  holder:any={}
  dataemail:any;

  constructor(
    public  localStorageService :   LocalStorageService,
    private actRoute:ActivatedRoute
  ) { 
  this.dataemail=this.actRoute.snapshot.paramMap.get('email');
console.log(this.id);
  }
  
  ngOnInit() {

    this.studentlist = JSON.parse(this.localStorageService.getData('studentList'));
    this.value =this.studentlist[this.dataemail]
     console.log("string",this.studentlist[this.dataemail])
  }

}

