import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1>
    <p>Email : {{email}}</p>
    <p>{{address.street}}</p>
    <p>{{address.city}}</p>
    <p>{{address.state}}</p>
    <button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
    <div *ngIf="showHobbies">
    <h4>Hobbies</h4>
    <ul>
        <li *ngFor = "let hobby of hobbies">
            {{hobby}}
        </li>
    </ul>
    </div>
    <form>
        <label>Name: </label><br/>
        <input type="text" name="name" [(ngModel)]="name"/><br/>
        <label>Email: </label><br/>
        <input type="text" name="email" [(ngModel)]="email"/><br/>
        <label>Street: </label><br/>
        <input type="text" name="addressStreet" [(ngModel)]="address.street"/><br/>
    </form>
  `,
})
export class UserComponent  {
    name : string; 
    email: string;
    address: address;
    hobbies : string[];
    showHobbies : boolean;
    constructor(){
        this.name = 'Vignesh'; 
        this.email = 'ibalvignesh@yahoo.com';
        this.address = {
            street : 'G 1402, 3rd Cross, HAL NewTownship, Marathahalli',
            city : 'Bengaluru',
            state : 'Karnataka'
        }; 
        this.hobbies = ['Music','Movies','Walking'];
        this.showHobbies = false;
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

