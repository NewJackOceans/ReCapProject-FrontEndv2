import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup

  constructor(private formbuilder:FormBuilder, private authService:AuthService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    
  }

  createLoginForm(){
    this.loginForm = this.formbuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })

  }
  login(){
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      let loginModel = Object.assign({}, this.loginForm.value)

      this.authService.login(loginModel).subscribe(response=>{
        this.toastrService.info(response.message)
        localStorage.setItem("token", response.data.token)
        
      },responseError=>{
        //console.log(responseError);
        
        this.toastrService.error(responseError.error)
      })
      
    }
  }
}
