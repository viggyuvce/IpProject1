import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';
@Component({
  selector: 'home',
  templateUrl: './html/about.component.html',
  providers : [PostsService],
  moduleId: module.id
})
export class AboutComponent  {

}
