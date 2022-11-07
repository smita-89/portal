import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution-list',
  templateUrl: './solution-list.component.html',
  styleUrls: ['./solution-list.component.css']
})
export class SolutionListComponent implements OnInit {

  solutions = [
    {
      title: 'DISCOVER',
      subtitle: 'LIFE INSURANCE',
      desc: 'Financially protect what you value - your child’s future, retirement income and financial',
      button: "BUY ONLINE"
    },
    {
      title: 'DISCOVER',
      subtitle: 'HEALTH INSURANCE',
      desc: 'Along with offering a comprehensive Health Insurance, we encourage you to live a healthy life and reward you for it.',
      button: 'BUY ONLINE'
    },
    {
      title: 'DISCOVER',
      subtitle: 'MULTIPLY WELLNESS',
      desc: 'Join our unique Wellness program that rewards you for staying healthy from the day you sign up.',
      button: 'VIEW PLANS'
    },

    {
      title: 'DISCOVER',
      subtitle: 'MOTOR INSURANCE',
      desc: 'Choose from a host of Motor Insurance providers to protect your prized vehicle from accidents and theft.',
      button: 'COMPAIRE AND BUY'
    },
    {
      title: 'DISCOVER',
      subtitle: ' 2LIFE INSURANCE',
      desc: 'Financially protect what you value - your child’s future, retirement income and financial',
      button: 'REQUEST A CALL BACK'
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
