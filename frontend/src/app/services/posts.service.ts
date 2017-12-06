import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from '../models/user';
import {Music} from '../models/music';

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
    createMusic(music: Music){
        return this.http.post('http://localhost:9889/insertMusic',music)
                .map(res => res.json());
    }
    getCompletedGrades(id: string){
        return this.http.get('http://localhost:9889/getCompletedGrades/'+id)
                .map(res => res.json());
    }
    getCompletedRanks(id: string){
        return this.http.get('http://localhost:9889/getCompletedRanks/'+id)
                .map(res => res.json());
    }
    getName(id: string){
        return this.http.get('http://localhost:9889/getName/'+id)
                .map(res => res.json());
    }
    getMusicModel(grade: string,rank: string){
        return this.http.get('http://localhost:9889/getMusic/'+grade+'/'+rank).map(res => res.json());
    }
    updateRank(rank: number, grade: number, id : string){
        return this.http.get('http://localhost:9889/update/'+id+'/'+grade+'/'+rank);
    }
    logout(){
        localStorage.clear();   
    }
    check(){
        return localStorage.getItem('currentUser');                 
    }
}
