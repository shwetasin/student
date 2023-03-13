import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, EmailValidator, Validators, UntypedFormBuilder } from '@angular/forms';
import { LocalStorageService } from 'src/app/local-storage.service'
import { ServiceNameService } from '../service-name.service';
import { ToastController } from '@ionic/angular';
import { Data } from '@angular/router';

@Component({
  selector: 'app-resgiter-from',
  templateUrl: './resgiter-from.page.html',
  styleUrls: ['./resgiter-from.page.scss'],
})
export class ResgiterFromPage {

  registerForm: FormGroup;
  formSubmitted: boolean = false;
  studentData: any[] = [];
  http: any;
  studentsection: any;
  id: any;
  result: any;
  presentToast: boolean = true;
  students: any[] = [];


  constructor(
    // private localStorage: LocalStorageService,
    private service: ServiceNameService
  ) {

    this.registerForm = new FormGroup({
      Studentname: new FormControl('', [Validators.required,]),
      address: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])


    });
    console.log((this.studentData));
    console.log('Successful registration')
  }

  onSubmit(value: any) {


    var saved_data = JSON.parse(localStorage.getItem('studentList') as string);
    console.log(saved_data)
    if (saved_data != null){
      let index = saved_data.findIndex((element: any) => element.email == value.email);
      console.log(index)
      if (index > -1) {
        this.service.presentAlert ("Email already registered.");
      } else {
        console.log("saved_data:", saved_data);
        saved_data = [...saved_data, ...[value]]
        localStorage.setItem('studentList', JSON.stringify(saved_data));
        this.registerForm.reset();
        this.service.presentAlert("registered successfully.");
        
      }
    } else{
      this.studentData.push(value)
      localStorage.setItem('studentList', JSON.stringify( this.studentData))
      this.registerForm.reset();
      this.service.presentAlert("registered successfully.");
    }
    

  }
}





