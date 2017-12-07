import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';
//import {AlertService} from '../services/alert.service';
import {Router, ActivatedRoute} from '@angular/router';

//import {User} from '../models/user';
@Component({
    selector: 'logout',
    templateUrl: './html/final.grade.html',
    providers : [PostsService],
    moduleId: module.id
})
export class FinalGradeComponent  {
    loading = false;
    model: any = {}  ;
    id : string;
    name : string;
    confirmPassword: string;
    notMatching = false;
    grade : string;
    loggedin = false;
    loggedout = true;
    constructor(private router: Router,
                private route: ActivatedRoute,
                private postsService: PostsService,
                ){
                    this.id = this.postsService.check();
                    console.log(this.id);
                    if(this.id != null)
                    {
                        this.loggedin = true;
                        this.loggedout = false;
                        postsService.getName(this.id)
                        .subscribe(
                           data => {
                               this.name = data;
                           },
                           error => {
                       
                           }
                       );
                    }
                    this.route.params.subscribe(params => {
                        this.grade = params['grade'];
                     });
                }
            
                downloadCertificate(){
                    // this.postService.getMp3(this.post.id).subscribe()
                     window.open("http://localhost:9889/download/certificate/"+this.grade);
                   }
    signin(){
        this.loading = true;
        this.router.navigate(['/login']);
        
        /*
        this.postsService.create(this.model)
                .subscribe(
                    data => {
                        this.alertService.success('Registration Successful',true)
                        this.router.navigate(['/login']);
                    },
                    error => {
                        this.alertService.error(error);
                        this.loading = false;
                    }
                )*/
        
    }
    logout(){
        this.postsService.logout();
        this.router.navigate(['/logout']);
      }
      login(){
        this.router.navigate(['/login']);
      }

}

