import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {PostsService} from '../services/posts.service';
@Component({
    selector: 'profile',
    templateUrl: './html/theory.intro.html',
    providers : [PostsService],
    moduleId: module.id
})
export class TheoryIntroComponent  {
    id: string;
    name: string;
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

