import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work-space-sub-nav',
  templateUrl: './work-space-sub-nav.component.html',
  styleUrls: ['./work-space-sub-nav.component.css']
})
export class WorkSpaceSubNavComponent implements OnInit {
  subNav: any;
  constructor(private actRoute: ActivatedRoute, private cdref: ChangeDetectorRef) { }
 
  ngOnInit(): void {
  }
  ngAfterViewChecked() {

    this.subNav = this.actRoute.snapshot.params.subNav;
    console.log("------------SUBNav AFVC---------------------------");
    console.log(this.subNav);
    this.cdref.detectChanges();
  }
}
