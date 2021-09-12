import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  propLegal = 'qualquer';

  constructor() { }

  ngOnInit(): void {
  }

  fazerAlgo(): void {
    console.log('fazendo algo');
  }

}
