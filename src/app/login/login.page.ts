import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userData = { "password": "", "email": "" };
  constructor( private navCtrl: NavController,public formBuilder: FormBuilder) { }
  loginform: FormGroup;
  notUser:boolean = false;
  ngOnInit() {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.loginform = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
    });
  }
  login() {
    console.log(this.loginform.value)
    if(this.loginform.value.email === 'samcomTechnobrains@gmail.com' && this.loginform.value.password==='sam123@'){
      this.navCtrl.navigateRoot('/profile');
    }else{
      this.notUser = true
    }
  }
}
