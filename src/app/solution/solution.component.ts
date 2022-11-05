import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  @Input() solution: any;

  constructor() { }

  ngOnInit(): void {
  }

}
