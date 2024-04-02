import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginForm!:FormGroup;
constructor(private formbuider:FormBuilder){}
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
  console.log(this.loginForm.value);
  debugger;
  if(this.loginForm.valid)
  {
    console.log("True");
  }
  else
  {
    console.log("False");
    
  }
}
}
