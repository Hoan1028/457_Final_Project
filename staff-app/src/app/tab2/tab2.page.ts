import { Component, OnInit } from '@angular/core';
import { Staff } from '../tab1/staff.model';
import { StaffService } from '../tab1/staff.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  team: Staff[];
  constructor(
              private staffService: StaffService) {}
  ionViewWillEnter() {
    this.team = this.staffService.getTeam();
  }
  ngOnInit() {}
  onRemoveFromTeam(staff: Staff) {
    this.staffService.removeFromTeam(staff);
    this.team = this.staffService.getTeam();
  }
}
