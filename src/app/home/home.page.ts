import { Component } from '@angular/core';
import{EmailValidator, FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';
import { LocalStorageService } from 'src/app/local-storage.service'
import {AlertController} from "@ionic/angular";
import { Router } from '@angular/router';
import { ServiceNameService } from '../service-name.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showPassword = false;
  studentlist: any[]=[];
  LoginForm: any;
  studentData: any;
  formSubmitted: boolean = false;
  studentdata: any[]=[];
  
  constructor(
    public  localStorageService :   LocalStorageService,
    private alertCtrl: AlertController,
    private fb: FormBuilder,
    private router:Router,
    private service :ServiceNameService
  ) {

  this.LoginForm=new FormGroup({
    email: new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
    password : new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]),



  });
  console.log( (this.studentData));


}
onLogin(value:any) {
  
    if(this.localStorageService.getData('studentList')){
      this.studentlist = JSON.parse(this.localStorageService.getData('studentList'));
        for(let i=0;i<=this.studentlist.length-1; i++){
            if(this.studentlist[i].email==value.email && this.studentlist[i].password==value.password){
              this.showPassword = !this.showPassword;
              this.LoginForm.reset();
              this.service.presentAlert ("Login Suceessfully.");
              this.router.navigate(['/dashboard', value.email])
            
        }
      
     }

     this.service.presentAlert ("Login Suceessfully.");

    }
  }
}


