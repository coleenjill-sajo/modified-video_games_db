import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {
  @Input() game: Game;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate([''])
    
    //the [''] is the path written in the localhost site bar thing
    //brings user back to the "Home" page
    //referenced in the app-routing.module.ts, defined as "HomeComponent"
  }
  
}
