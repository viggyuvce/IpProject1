import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {PostsService} from '../services/posts.service';
@Component({
    selector: 'profile',
    templateUrl: './html/profile.component.html',
    providers : [PostsService],
    moduleId: module.id
})
export class ProfileComponent  {
    id: string;
    loggedin = false;
    loggedout = true;
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

