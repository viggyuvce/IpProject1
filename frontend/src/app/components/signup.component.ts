import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {AlertService} from '../services/alert.service';
import {Router} from '@angular/router';
import {User} from '../models/user';
@Component({
    selector: 'signup',
    templateUrl: './html/signup.component.html',
    providers : [PostsService, AlertService],
    moduleId: module.id
})
export class SignupComponent  {
    loading = false;
    model: any = {}  ;
    confirmPassword: string;
    notMatching = false;
    constructor(private router: Router,
                private postsService: PostsService,
                private alertService: AlertService){
                }
    
    register(){
        this.loading = true;

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
                )
        
    }
    

}

