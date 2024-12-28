import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  imports: [],
  standalone: true,
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit{
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button'

  constructor(){}

  ngOnInit(): void {
  
  }
}
