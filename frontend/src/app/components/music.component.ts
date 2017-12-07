import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PostsService} from '../services/posts.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Music} from '../models/music';
import { SafeResourceUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';
@Component({
    selector: 'music',
    templateUrl: './html/music.component.html',
    providers : [PostsService],
    moduleId: module.id
})
export class MusicComponent  {
    id: string;
    name: string;
    grade : string;
    igrade : number;
    rank : string;
    nextRank : number;
    nextGrade: number;
    irank : number;
    music : any = {};
    finalMusic = false;
    sanitizedLink : SafeResourceUrl;
    loggedin = false;
    loggedout = true;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private postService : PostsService,
        private sanitizer: DomSanitizer
     ) { 
         this.id = this.postService.check();
         console.log(this.id);
         if(this.id != null)
         {
             this.loggedin = true;
             this.loggedout = false;
             postService.getName(this.id)
             .subscribe(
                data => {
                    this.name = data;
                },
                error => {
            
                }
            )
            this.route.params.subscribe(params => {
                this.grade = params['grade'];
                this.igrade = Number.parseInt(this.grade);
             });
             this.route.params.subscribe(params => {
                this.rank = params['rank'];
                this.irank = Number.parseInt(this.rank);
                if(this.rank == '5') {
                    this.nextRank = 1;
                    this.nextGrade = this.igrade + 1;
                }
                else{
                    this.nextGrade = this.igrade;
                    this.nextRank = this.irank + 1;
                }
             });
             postService.getMusicModel(this.grade,this.rank)
             .subscribe(
                 data => {
                    this.music = data;
                    if(this.music.rank == 5) this.finalMusic = true; 
                    console.log(this.music.link);
                    this.sanitizedLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.music.link);
                    console.log(this.sanitizedLink);
                 },
                 error => {

                 }
             )
             
         }
     }
     downloadMp3(){
       // this.postService.getMp3(this.post.id).subscribe()
        window.open("http://localhost:9889/download/mp3/"+this.music.id);
      }
      downloadSheet(){
        window.open("http://localhost:9889/download/sheet/"+this.music.id);
      }
      update(){
          this.postService.updateRank(this.nextRank,this.nextGrade,this.id).subscribe(
              data=>{
                  console.log("done");
              },
              error=>{
                console.log("error");
              }
          );
          this.router.navigate(['/list/'+this.nextGrade]);
      }
    logout(){
        this.postService.logout();
        this.router.navigate(['/logout']);
    }
    login(){
        this.router.navigate(['/login']);
    }
}

