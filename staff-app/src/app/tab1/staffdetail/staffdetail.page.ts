import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Staff } from '../staff.model';
import { StaffService } from '../staff.service';
import {ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-staffdetail',
  templateUrl: './staffdetail.page.html',
  styleUrls: ['./staffdetail.page.scss'],
})
export class StaffdetailPage implements OnInit {
  staff: Staff;
  id: string;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private staffService: StaffService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('staffId');
    this.staff = this.staffService.getStaff(this.id);
  }

  async onHireStaff() {
    const alert = await this.alertCtrl.create({
      header: 'Hire Staff',
      subHeader: 'Are you sure?',
      message: 'Are you sure you want to hire this candidate?',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            this.staffService.addToTeam(this.staff);
            this.router.navigateByUrl('/tabs/tab1');
          }
        },
        {
          text: 'Nevermind',
          role: 'canel',
          handler: () => {console.log('Cancelled');
         },
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
        this.staffService.addToTeam(this.staff);
      }
      if (result.data === 2) {
        this.staffService.removeFromTeam(this.staff);
      }
    });
  }
  isOnTeam(id: string) {
    return this.staffService.isAlreadyOnTeam(id);
  }
}
