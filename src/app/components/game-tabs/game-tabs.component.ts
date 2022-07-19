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
  }
  
}
