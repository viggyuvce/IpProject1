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
    id: number;
    loading = false;
    constructor(
        private router: Router,
        private postService : PostsService
     ) { }

    checkLog(){
        this.loading = true;
        this.postService.check()
        .subscribe(
            data => {
                this.id = 1;
              //  this.router.navigate(['/login']);
            },
            error => {
                //this.alertService.error(error);
                this.loading = false;
            }
        )
    }
}

