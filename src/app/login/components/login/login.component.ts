import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFG: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginFG = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginFG.valid) {
      this.auth.authenticate(this.loginFG.get('username').value, this.loginFG.get('password').value);
      this.router.navigateByUrl('/home');
    } else {
      Object.keys(this.loginFG.controls).forEach(field => {
        this.loginFG.get(field).markAsTouched();
      });
    }
  }
}
