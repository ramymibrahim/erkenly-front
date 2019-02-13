import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  error:boolean=false;
  constructor(private auth: AuthService,private router:Router) { }

  ngOnInit() {
    this.username = "abdallah@yahoo.com";
  }

  login() {
    this.error=false;
    this.auth.login(this.username, this.password).subscribe(
      (data: any) => {
        console.log(data);
        localStorage.setItem('token',data.token);
        this.router.navigate(['/admin']);
      },
      error => {
        console.log(error);
        this.error=true;
      }
    );
  }
}
