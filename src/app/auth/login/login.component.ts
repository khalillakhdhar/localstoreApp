import { Component } from '@angular/core';
import { User } from '../../shared/interfaces/user';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 constructor(private userService:UserService,private router:Router)
  {

  }
  user={} as User;
  connexion()
  {
this.userService.login(this.user.email,this.user.password) ? window.location.replace("todo") : alert("compte non reconnu");

  }
  reset()
  {
    this.user={} as User;
  }
}
