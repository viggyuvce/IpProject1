import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {PostsService} from '../services/posts.service';
@Component({
    selector: 'profile',
    templateUrl: './html/grade.component.html',
    providers : [PostsService],
    moduleId: module.id
})
export class GradeComponent  {
    id: string;
    name: string;
    completedGrades: number;
    numbers = [1,2,3,4,5,6,7,8];
    loggedin = false;
    loggedout = true;
    constructor(
        private router: Router,
        private postService : PostsService
     ) { 
         this.id = this.postService.check();
         if(this.id != null)
         {
             this.loggedin = true;
             this.loggedout = false;
             postService.getCompletedGrades(this.id)
             .subscribe(
                data => {
                    this.completedGrades = data;
                    console.log(this.completedGrades);
                },
                error => {
            
                }
             );
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
    checkGrade(num:number){
        if(num <= this.completedGrades) return true;
        else return false;
    } 
    logout(){
        this.postService.logout();
        this.router.navigate(['/logout']);
    }
    login(){
        this.router.navigate(['/login']);
    }
}

