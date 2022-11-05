import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  constructor() { }
  loginForm= new FormGroup({
    username: new FormControl('',[Validators.required]),
    age: new FormControl(''),
    contactnumber: new FormControl(''),
    education: new FormControl('')
  })
  loginUser(){
    console.warn(this.loginForm.value)
  }

  get username(){
    
    return this.loginForm.get('username')

  }
  ngOnInit(): void {
  }

}
