import { Component } from '@angular/core';
import { User } from '../../shared/interfaces/user';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private userService:UserService,private router:Router)
  {

  }

  user={} as User;
  confirmMdp="";
  inscription()
  {

    if(this.userService.register(this.user))
     window.location.replace("./auth/login")
    else
    alert("ce email est déjà inscrit")
this.reset()


  }
  reset()
  {
    this.user={} as User;
  }
}
