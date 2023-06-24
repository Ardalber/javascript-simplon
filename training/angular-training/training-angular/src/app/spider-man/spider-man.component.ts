import { Component, OnInit } from '@angular/core';
import { superHeros } from 'src/model/super-heros.model';

@Component({
  selector: 'app-spider-man',
  templateUrl: './spider-man.component.html',
  styleUrls: ['./spider-man.component.css']
})
export class SpiderManComponent implements OnInit {
  spiderMan = new superHeros
  ngOnInit() {

    this.spiderMan.name = "spider man";
    this.spiderMan.age = 20;
    this.spiderMan.power = "he's a spider ";
    this.spiderMan.origin = "Earth";
    this.spiderMan.human = true;

  }

}
