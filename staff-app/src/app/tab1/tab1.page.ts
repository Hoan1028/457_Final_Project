import { Component, OnInit } from '@angular/core';
import { StaffService } from './staff.service';
import { Staff } from './staff.model';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { StaffdetailPage } from './staffdetail/staffdetail.page';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  loadedStaff: Staff[];
  constructor(private router: Router,
              private alertCtrl: AlertController,
              private modalCtrl: ModalController,
              private staffService: StaffService) {}
  ngOnInit() {
    this.loadedStaff = this.staffService.staff;
    this.staffService.getstaffdb();
  }
  ionViewWillEnter() {
    this.loadedStaff = this.staffService.staff;
  }
  async onHireStaff(selectstaff: Staff) {
    const alert = await this.alertCtrl.create({
      header: 'Hire Staff',
      subHeader: 'Are you sure?',
      message: 'Are you sure you want to hire this candidate?',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            this.staffService.addToTeam(selectstaff);
          }
        },
        {
          text: 'Nevermind',
          role: 'canel',
          handler: () => {console.log('Cancelled'); },
        }
      ]
    });
    await alert.present();
  }
  async OnViewStaff(staff: Staff) {
    const modal = await this.modalCtrl.create({
      component: StaffdetailPage,
      componentProps: staff
    });
    await modal.present();
    modal.onDidDismiss().then((result: any) => {
      if (result.data === 1) {
        this.staffService.addToTeam(staff);
      }
      if (result.data === 2) {
        this.staffService.removeFromTeam(staff);
      }
    });
  }
  isOnTeam(id: string) {
    return this.staffService.isAlreadyOnTeam(id);
  }
  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }
}
