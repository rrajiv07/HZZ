import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-work-space',
  templateUrl: './create-work-space.component.html',
  styleUrls: ['./create-work-space.component.css']
})
export class CreateWorkSpaceComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  save()
  {
    this.route.navigateByUrl('/workspace/view/w1/summary');
  }
}
