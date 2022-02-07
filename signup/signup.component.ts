import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = new FormGroup({
      fname: new FormControl(),
      lname: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      cpassword: new FormControl()
    })
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      cpassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
    })
  }
  signup() {
    console.log(this.signupForm.value);
    window.localStorage.setItem(this.signupForm.value.username, JSON.stringify(this.signupForm.value));
    this.router.navigateByUrl("");  
  }

  get fname(){
    return this.signupForm.get('fname');
  }
  get lname(){
    return this.signupForm.get('lname');
  }
  get username(){
    return this.signupForm.get('username');
  }
  get password(){
    return this.signupForm.get('password');
  }
  get cpassword(){
    return this.signupForm.get('cpassword');
  }

}
