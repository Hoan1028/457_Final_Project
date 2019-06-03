import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StaffdetailPage } from './staffdetail.page';

const routes: Routes = [
  {
    path: '',
    component: StaffdetailPage
  },
  {
    path: ':staffId',
    component: StaffdetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StaffdetailPage]
})
export class StaffdetailPageModule {}
