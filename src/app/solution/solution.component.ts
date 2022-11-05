import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  solution = {
    title: 'DISCOVER',
    subtitle: ' LIFE INSURANCE',
    desc: 'Financially protect what you value - your child’s future, retirement income and financial',
    button: "Buye"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
