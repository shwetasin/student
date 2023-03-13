import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AlertController} from "@ionic/angular";
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';
import { ServiceNameService } from '../service-name.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  studentlist: any[]=[];
  studentData: any=[];
  getdata:any;
  view:any;
  LoginForm: any;
  formSubmitted: boolean = false;
  loginsucess: any;
  alertController: any;
  holder: any;
  loginemail:any;
  index:any;


  constructor(
    public  localStorageService :   LocalStorageService,
    private alertCtrl: AlertController,
    private router: Router,
    private service: ServiceNameService,
    private route: ActivatedRoute
  ) { 
      
    this.loginemail=this.route.snapshot.paramMap.get('email');
    console.log(this.loginemail)
    this.studentlist = JSON.parse(localStorageService.getData('studentList'));
    this.index = this.studentlist.findIndex((element) => element.email == this.loginemail);
  
    if(this.index > -1){
      console.log("Index/: ",this.index)
      this.studentData =  this.studentlist[this.index];
      console.log("studentData:",this.studentData);
    }else{
        this.router.navigate(['/login']);
    }
}
  
 
ngOnInit():void  {} 
      
Logout(){
localStorage.removeItem('studentdetails');
this.service.presentAlert ("Logout Suceessfully.");
this. router. navigate(['/home'])
}
}