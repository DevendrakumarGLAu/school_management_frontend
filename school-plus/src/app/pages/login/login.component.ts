import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonServicesService } from 'src/app/common-services.service';
import { Router } from '@angular/router'; // import Router at the top

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private commonServices: CommonServicesService,
    private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log('Login data:', formData);
      this.commonServices.login(formData).subscribe((response:any) =>{
        const  access_token  = response.token;
        console.log("response", response)
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('user_role', response.role);
        const role = response.role;
switch (role) {
  case 'admin':
    this.router.navigate(['/admin/dashboard']);
    break;
  case 'teacher':
    this.router.navigate(['/teacher/dashboard']);
    break;
  case 'student':
    this.router.navigate(['/student/dashboard']);
    break;
  default:
    this.router.navigate(['/unauthorized']);
}
      })
    }
  }
}

