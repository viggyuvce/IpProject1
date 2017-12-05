import { Component } from '@angular/core';
import {PostsService} from '../../services/posts.service';
//import {AlertService} from '../services/alert.service';
import {Router} from '@angular/router';
//import {User} from '../models/user';
@Component({
    selector: 'logout',
    templateUrl: './html/final.component.html',
    providers : [PostsService],
    moduleId: module.id
})
export class FinalComponent  {
    loading = false;
    model: any = {}  ;
    confirmPassword: string;
    notMatching = false;
    constructor(private router: Router,
                private postsService: PostsService,
                ){
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
    

}

