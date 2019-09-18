import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {


  userForm: FormGroup;
  submitted: boolean;
  submitForm;
  submitData;
  error: {};
  loginError: string;
  returnUrl: string;

  
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private authService: UserService, private router: Router) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });

   // reset login status
   this.authService.logout();

   // get return url from route parameters or default to '/'
   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';


  }

  get f() { return this.userForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.userForm.invalid) {
        return;
    }
    const formData = this.userForm.getRawValue();
    this.submitData = this.authService.userLogin(formData).subscribe(data => {
      if (this.authService.isLoggedIn) {
        // const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
        this.router.navigateByUrl(this.returnUrl);
            
      } else {
        this.loginError = 'Username or password is incorrect.';
      }
    },
    error => this.error = error,
    );
}
}
