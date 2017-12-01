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
   /* login(username: string, password: string) {
        return this.http.post('http://localhost:9889/login', JSON.stringify({ username: username, password: password }))
            .map(res => {
                // login successful if there's a jwt token in the response
                let user = res.json();
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }*/
    logout(){
        localStorage.clear();   
    }
    check(){
        return localStorage.getItem('currentUser'); 
                
    }
}
