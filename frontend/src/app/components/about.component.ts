import { Component } from '@angular/core';
import{Router} from '@angular/router';
import {PostsService} from '../services/posts.service';
@Component({
  selector: 'about',
  templateUrl: './html/about.component.html',
  providers : [PostsService],
  moduleId: module.id
})
export class AboutComponent  {
  id : string;
  loggedin = false;
  loggedout = true;
  name :string;
  constructor(
    private router: Router,
    private postService : PostsService
 ) { 
     this.id = this.postService.check();
     console.log(this.id);
     if(this.id != null)
     {
         this.loggedin = true;
         this.loggedout = false;
         postService.getName(this.id)
         .subscribe(
            data => {
                this.name = data;
            },
            error => {
        
            }
        )
         
     }
 }
 logout(){
  this.postService.logout();
  this.router.navigate(['/logout']);
}
login(){
  this.router.navigate(['/login']);
}

}
