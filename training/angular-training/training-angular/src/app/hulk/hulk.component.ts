import { Component, OnInit } from '@angular/core';
import { superHeros } from 'src/model/super-heros.model';

@Component({
  selector: 'app-hulk',
  templateUrl: './hulk.component.html',
  styleUrls: ['./hulk.component.css']
})
export class HulkComponent implements OnInit {
  hulk = new superHeros;
  ngOnInit() {
    this.hulk.name = "hulk";
    this.hulk.age = 40;
    this.hulk.power = "smash";
    this.hulk.origin = "Earth";
    this.hulk.human = true;
  }

}
