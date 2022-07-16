import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm!:FormGroup;
  submitted = false;
  constructor(private fb:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName:['',[Validators.required,Validators.email]],
      passWord:['',[Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )]]
    });
  }

  get loginData(){
    return this.loginForm.controls;
  }

  onSubmit(){
    console.log(this.loginData);
    this.submitted = true;
       if(this.loginForm.valid)
       {
          localStorage.setItem("userName",this.loginForm.get('userName')?.value);
          localStorage.setItem("passWord",this.loginForm.get('passWord')?.value);  
          this.clear();
          this.loginForm.disable();
          this.router.navigate(['orders']);
       }
  }

  clear()
  {
    this.loginForm.patchValue({
      userName:'',
      passWord:''
    });
  }
}
