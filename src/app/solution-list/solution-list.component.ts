import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution-list',
  templateUrl: './solution-list.component.html',
  styleUrls: ['./solution-list.component.css']
})
export class SolutionListComponent implements OnInit {
  solution = {
    title: 'DISCOVER',
    subtitle: ' LIFE INSURANCE',
    desc: 'Financially protect what you value - your child’s future, retirement income and financial',
    button: "Buye"
  };

  solution2 = {
    title: 'DISCOVER2',
    subtitle: ' 2LIFE INSURANCE',
    desc: 'Financially protect what you value - your child’s future, retirement income and financial',
    button: "Buye"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
