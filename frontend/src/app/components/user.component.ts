import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';
@Component({
    selector: 'user',
    templateUrl: 'user.component.html',
    providers : [PostsService],
    moduleId: module.id
})
export class UserComponent  {
    name : string; 
    email: string;
    address: address;
    hobbies : string[];
    showHobbies : boolean;
    posts : Post[];
    constructor(private postsService: PostsService){
        this.name = 'Vignesh'; 
        this.email = 'ibalvignesh@yahoo.com';
        this.address = {
            street : 'G 1402, 3rd Cross, HAL NewTownship, Marathahalli',
            city : 'Bengaluru',
            state : 'Karnataka'
        }; 
        this.hobbies = ['Music','Movies','Walking'];
        this.showHobbies = false;
        this.postsService.getPosts().subscribe(posts => {
            this.posts=posts;
        });
    }
    toggleHobbies(){
        if(this.showHobbies == false)
        this.showHobbies = true;
        else
        this.showHobbies=false;
    }

}

interface address {
    street : string;
    city : string;
    state : string;
}

interface Post {
    id : number;
    title: string;
    body: string;

}