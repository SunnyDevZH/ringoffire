import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent implements OnInit{

  @Input() name!: string; // Hier wird der Typ als string festgelegt
  @Input() playerActiv: boolean = false;

constructor() {}

ngOnInit(): void{

}

}
