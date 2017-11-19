import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from '../models/user';

@Injectable()
export class PostsService {
    constructor(private http: Http){
        console.log("Posts service Initialised");
    }
    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json());
    }
    create(user: User){
        return this.http.post('http://localhost:8888/register',user)
                .map(res => res.json());
    }
}
