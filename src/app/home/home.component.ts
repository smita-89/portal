import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
