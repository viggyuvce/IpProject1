import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {AlertService} from '../services/alert.service';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {Music} from '../models/music';
@Component({
    selector: 'insert',
    templateUrl: './html/insert.component.html',
    providers : [PostsService, AlertService],
    moduleId: module.id
})
export class InsertComponent  {
    loading = false;
    model: any = {}  ;
    confirmPassword: string;
    notMatching = false;
    musicModel : any = {};
    constructor(private router: Router,
                private postsService: PostsService,
                private alertService: AlertService){
                }
    
    insert(){
        this.loading = true;

        this.postsService.createMusic(this.musicModel)
                .subscribe(
                    data => {
                        this.alertService.success('Registration Successful',true)
                        this.router.navigate(['/insertMusic']);
                    },
                    error => {
                        this.alertService.error(error);
                        this.loading = false;
                    }
                )
        
    }
    

}
interface music{
    title: string,
    scale : string,
    description : string,
    composers: string,
    sheetLink: string,
    audioLink : string,
    grade: number,
    rank: number,
}
