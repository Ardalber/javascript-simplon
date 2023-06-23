import { Component, OnInit } from '@angular/core';
import { superHeros } from 'src/model/super-heros.model';

@Component({
  selector: 'app-iron-man',
  templateUrl: './iron-man.component.html',
  styleUrls: ['./iron-man.component.css']
})
export class IronManComponent implements OnInit {
  ironMan!: superHeros;
  ngOnInit() {
    this.ironMan = new superHeros;
    this.ironMan.name = "iron man";
    this.ironMan.age = 50;
    this.ironMan.power = "Big brain";
    this.ironMan.origin = "Earth";
    this.ironMan.human = true;
  }

}
