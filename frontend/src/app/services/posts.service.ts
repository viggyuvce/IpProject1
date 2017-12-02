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
        return this.http.post('http://localhost:9889/signup',user)
                .map(res => res.json());
    }
    getCompletedGrades(id: string){
        return this.http.get('http://localhost:9889/getCompletedGrades/'+id)
                .map(res => res.json());
    }
    getName(id: string){
        return this.http.get('http://localhost:9889/getName/'+id)
                .map(res => res.json());
    }
    logout(){
        localStorage.clear();   
    }
    check(){
        return localStorage.getItem('currentUser'); 
                
    }
}
