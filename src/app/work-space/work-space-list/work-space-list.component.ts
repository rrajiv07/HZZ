import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-space-list',
  templateUrl: './work-space-list.component.html',
  styleUrls: ['./work-space-list.component.css']
})
export class WorkSpaceListComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  view(workspaceId)
  {
    this.route.navigateByUrl('/workspace/view/' +workspaceId + '/summary');
  }

}
