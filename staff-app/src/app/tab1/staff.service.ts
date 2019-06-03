import { Injectable } from '@angular/core';
import { Staff } from './staff.model';
import { StaffdetailPage } from './staffdetail/staffdetail.page';
import { getTemplateContent } from '@angular/core/src/sanitization/html_sanitizer';
import { identifierModuleUrl } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class StaffService {
  private hireStaff: Staff[] = [];
  private staffList: Staff[] = [
    new Staff(
      's1',
      'Angel Martinez',
      'Graphic Designer',
      '24-year-old resident artist at a studio who enjoys painting, camping and extreme ironing.',
      '../assets/imgs/AngelMartinez.png',
      47080.00),
    new Staff(
      's2',
      'Brendan Evans',
      'UI Developer',
      ' 26-year-old programmer who enjoys helping old ladies across the road, cycling and golf.',
      '../assets/imgs/BrendanEvans.png',
      59130.00),
    new Staff(
      's3',
      'Brian Allen',
      'Backend Developer',
      '35-year-old backend developer who enjoys relaxing, appearing in the background on TV and baking.',
      '../assets/imgs/BrianAllen.png',
      67490.00),
    new Staff(
      's4',
      'Ezra Phillips',
      'Database Developer',
      '28-year-old developer who enjoys stealing candy from babies, listening to music and swimming.',
      '../assets/imgs/EzraPhillips.png',
      71520.00),
    new Staff(
      's5',
      'Melanie Powell',
      'Graphics Designer',
      '28-year-old designer who enjoys attending museums, social media and painting.',
      '../assets/imgs/MelaniePowell.png',
      53130.00),
    new Staff(
      's6',
      'Mitch Paterson',
      'Software Engineer',
      ' 31-year-old former tech lead at Facebook who enjoys duck herding, podcasting and social media.',
      '../assets/imgs/MitchPaterson.png',
      89660.00),
    new Staff(
      's7',
      'Wei Shen',
      'Data Scientist',
      '27-year-old PhD student who enjoys painting, watching television and badminton.',
      '../assets/imgs/WeiShen.png',
      79220.00),
    new Staff(
      's8',
      'Zane Khan',
      'Software Engineer',
      '29-year-old software engineer who enjoys working on cars, playing video games and jigsaw puzzles.',
      '../assets/imgs/ZaneKhan.png',
      83780.00),
  ];
get staff() {
  return [...this.staffList];
}

constructor(private http: HttpClient) { }

getstaffdb() {
  return this.http.get('https://ionic-staffme-project.firebaseio.com/staff.json')
  .subscribe((response) => { console.log(response); })
;
}

getStaff(id: string) {
  return {...this.staffList.find(s => s.id === id)};
}

addToTeam(staff: Staff) {
  this.hireStaff.push(staff);
  console.log(this.hireStaff);
}
removeFromTeam(staff: Staff) {
  const position = this.hireStaff.findIndex((staffEl: Staff) => {
    return staffEl.id === staff.id;
  });
  this.hireStaff.splice(position, 1);
}
getTeam() {
  return this.hireStaff.slice();
}
isAlreadyOnTeam(id: string) {
  return this.hireStaff.find((staffEl: Staff) => {
    return staffEl.id === id;
  });
  }
addStaff(name: string, job: string, desc: string, salary: number) {
  const newStaff = new Staff(
    Math.random().toString(),
    name,
    job,
    desc,
    '../assets/imgs/Default.png',
    salary
  );
  this.http.post(
    'https://ionic-staffme-project.firebaseio.com/staff.json',
    {
      ...newStaff,
      id: null
    }
  )
  .subscribe((response) => {
    console.log(response);
  });
  this.staffList.push(newStaff);
  console.log(this.staffList);
}
}
