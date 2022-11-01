import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  logForm= new FormGroup({
    schoolname: new FormControl(''),
    schoolpassward: new FormControl('', [Validators.required, Validators.minLength(5)]),
    schoolshape: new FormControl('', [Validators.required]),
    schoolemail: new FormControl('', [Validators.required, Validators.email]),

  })
  logUser(){
    console.warn(this.logForm.value)
  }
  get schoolshape(){
    return this.logForm.get('schoolshape')
  }
  get schoolemail(){
    return this.logForm.get('schoolemail')
  }

  get schoolpassward(){
    return this.logForm.get('schoolpassward')

  }

  ngOnInit(): void {
  }

}
