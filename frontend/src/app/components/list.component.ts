import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {PostsService} from '../services/posts.service';
@Component({
    selector: 'profile',
    templateUrl: './html/list.component.html',
    providers : [PostsService],
    moduleId: module.id
})
export class ListComponent  {
    id: string;
    completedGrades: number;
    completedRanks: number;
    currentPageGrade: number;
    numbers = [1,2,3,4,5,6,7,8,9,10];
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
             postService.getCompletedRanks(this.id)
             .subscribe(
                data => {
                    this.completedRanks = data;
                    console.log(this.completedRanks);
                },
                error => {
            
                }
             );
            
         }
     }
    check(num:number){
        if(this.currentPageGrade < this.completedGrades) return true;
        if(num <= this.completedRanks) return true;
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

