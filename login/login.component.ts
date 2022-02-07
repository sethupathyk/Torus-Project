import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: '.app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  login() {
     console.log(this.loginForm.value.email);
    let name: string = JSON.parse(JSON.stringify(localStorage.getItem(this.loginForm.value.email)));
    console.log(JSON.parse(name).email)
    if (this.loginForm.value.email == JSON.parse(name).username && this.loginForm.value.password == JSON.parse(name).password) {
      alert("login successfull");
      this.router.navigate(['list']);
    }
    else {
      alert("Invalid user")
    }
  }

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

}
