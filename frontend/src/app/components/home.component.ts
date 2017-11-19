import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';
@Component({
    selector: 'home',
    templateUrl: './html/home.component.html',
    providers : [PostsService],
    moduleId: module.id
})
export class HomeComponent  {
}

