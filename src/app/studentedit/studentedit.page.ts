import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage.service'
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.page.html',
  styleUrls: ['./studentedit.page.scss'],
})
export class StudenteditPage implements OnInit {
  studentlist: any = [];
  studentData: any = [];
  getdata: any;

  email1: any;
  holder: any;
  formSubmitted: boolean = false;
  editStudent: FormGroup;
  value: any;
  studentList: any = [];
  index: any;


  constructor(
    public localStorageService: LocalStorageService,
    private actRoute: ActivatedRoute,
    private alertController: AlertController,
    private router: Router
  ) {


    this.editStudent = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      Studentname: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      phone: new FormControl("", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      address: new FormControl("", [Validators.required, Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]),
      password: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    });

    console.log(typeof (this.studentData));

    this.email1 = this.actRoute.snapshot.paramMap.get('email');
    console.log(this.email1);
  }

  ngOnInit() {

    this.studentlist = JSON.parse(this.localStorageService.getData('studentList'));
    console.log("studentlist:", this.studentlist);
    this.index = this.studentlist.findIndex((element: any) => element.email == this.email1);
    console.log("index:", this.index);
    if (this.index > -1) {
      console.log("Index/: ", this.index)
      this.studentData = this.studentlist[this.index];
      this.editStudent.controls['email'].setValue(this.studentData.email);
      this.editStudent.controls['Studentname'].setValue(this.studentData.Studentname);
      this.editStudent.controls['phone'].setValue(this.studentData.phone);
      this.editStudent.controls['address'].setValue(this.studentData.address);
      this.editStudent.controls['password'].setValue(this.studentData.password);
      console.log("studentData:", this.studentData);
    } else {
      this.router.navigate(['/view']);
    }


  }

  onEdit(value: any) {
    console.log(this.studentlist);
    if (value != null || value != undefined) {
      {
        this.studentlist[this.index] = value;
        localStorage.setItem('studentList', JSON.stringify(this.studentlist));
        this.router.navigate(['dashboard/' + this.email1]);
      }
    }

  }
}



