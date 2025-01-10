import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private StorageKey="users";
  private authKey="currentUser";

  constructor(private router:Router) { }
register(user:User): boolean
{
  const users=this.getAllUsers();
  if(users.find((u)=>u.email===user.email))
  {
    return false;
  }
  users.push(user);
  localStorage.setItem(this.StorageKey,JSON.stringify(users));
  return true;
}
login(email:string , password:string):boolean
{
  const users=this.getAllUsers();
  const user=users.find((u)=>u.email===email && u.password===password);
  if(user)
  {
    localStorage.setItem(this.authKey,JSON.stringify(user));
    return true;
  }
  return false;

}
logout()
{
  localStorage.removeItem(this.authKey);
  this.router.navigate(['../login'])
}

isAuthenticated():boolean
{
  return !!localStorage.getItem(this.authKey); // existe et n'est pas vide
}


  getAllUsers(): User[]
  {
    const users=localStorage.getItem(this.StorageKey);
    return users ? JSON.parse(users) : [];
  }
}
