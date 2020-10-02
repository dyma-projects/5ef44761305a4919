import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  template: `<p *ngIf="statut">p1<p><p *ngIf="!statut">p2<p><button>
            <button (click)="onClickMe()">Click me!</button>`,
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {

  constructor() { }
  statut = true

  ngOnInit(): void {
  }
  onClickMe() {
    this.statut = !this.statut;
    console.log(this.statut);
  }

}
