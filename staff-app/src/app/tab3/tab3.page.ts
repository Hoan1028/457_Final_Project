import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StaffService } from '../tab1/staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  form: FormGroup;
  constructor(private staffService: StaffService,
              private router: Router) { }
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      job: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      desc: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      salary: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }
  onCreateJob() {
    console.log(this.form.value);
    this.staffService.addStaff(
      this.form.value.name,
      this.form.value.job,
      this.form.value.desc,
      this.form.value.salary
    );
    this.form.reset();
    this.router.navigate(['/tabs/tab1']);
  }
}
