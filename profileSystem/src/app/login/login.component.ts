import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]

})


export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  loginForm: FormGroup;
  // loginService: LoginService;
  ngOnInit() {
    console.log('Initiated login Component');
   // var loginService = new LoginService(HttpClient);
    this.loginForm = new FormGroup({
      userName: new FormControl(),
      userPass: new FormControl()
   });
  }

  /**
   * Function to execute when form is submitted
   * Firstly, values from forms are extracted, 
   * then the Login Service is Called
   */
  onSubmit() {
    console.log('[NOTE] Form is submitted');
    // console.log(this.loginForm.controls.userName);
    const userName = this.loginForm.controls.userName.value;
    const userPass = this.loginForm.controls.userPass.value;
    console.log(userName);
    console.log(userPass);

    // const ls = new LoginService();
    const isValid = this.loginService.validateUser(userName, userPass);
    console.log('[NOTE] isValid = ' + isValid);
    // tslint:disable-next-line: deprecation
  }

}
