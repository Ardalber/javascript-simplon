import { Component, OnInit } from '@angular/core';
import { superHeros } from 'src/model/super-heros.model';

@Component({
  selector: 'app-thor',
  templateUrl: './thor.component.html',
  styleUrls: ['./thor.component.css']
})
export class ThorComponent implements OnInit {
  thor = new superHeros;
  ngOnInit() {
    this.thor.name = "thor";
    this.thor.age = 40;
    this.thor.power = "mjolnir";
    this.thor.origin = "asgaard";
    this.thor.human = false;
  }

}
