import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginForm!:FormGroup;
constructor(private formbuider:FormBuilder,private router:Router){}
ngOnInit():void{
  this.setForm();
}
setForm()
{
this.loginForm=this.formbuider.group({
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required]]
});
}
submit()
{
  if(this.loginForm.valid)
  {
    this.router.navigateByUrl('/dashboard');
  }
}
}
