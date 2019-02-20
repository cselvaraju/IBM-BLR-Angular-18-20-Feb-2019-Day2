import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actorlist',
  templateUrl: './actorlist.component.html',
  styleUrls: ['./actorlist.component.css']
})
export class ActorlistComponent implements OnInit {

  actorList;
  tmpActorList;
  newName;
  newCity;
  tmpActor;
  formFlag;
  selectedIndex;

  constructor() { }

  ngOnInit() {
    this.actorList = [
      { name: 'Amitabh Bachhan', city: 'Mumbai' },
      { name: 'Kamal Hasan', city: 'Chennai' },
      { name: 'Kajol', city: 'Mumbai' },
      { name: 'Jayapradha', city: 'Hyderabad' },
      { name: 'Rajnikant', city: 'Chennai' }
    ];

    this.tmpActorList = this.actorList.slice();

    this.newCity = this.newName = '';
    this.tmpActor = {};
    this.formFlag = true;
    this.selectedIndex = -1;
  }

  deleteActor(index) {
    this.actorList.splice(index, 1);
  }

  addActor() {
    // const tempActor = {
    //   name: this.newName,
    //   city: this.newCity
    // };
    // this.actorList.push(tempActor);
    this.actorList.push(this.tmpActor);
    this.tmpActor = {};
  }

  toggleForm() {
    this.formFlag = !this.formFlag;
  }

  editActor(index) {
    this.selectedIndex = index;

    // Don't do this - SHALLOW COPY!!!
    // this.tmpActor = this.actorList[index];

    // Solution - DEEP COPY
    // Approach - 1: Not Recommended
    // this.tmpActor = {
    //   name: this.actorList[index].name,
    //   city: this.actorList[index].city
    // };

    // Approach - 2: Recommended approach
    this.tmpActor = Object.assign({}, this.actorList[index]);
  }

  saveActor(index) {
    this.selectedIndex = -1;
  }

  cancelEdit(index) {
    this.actorList[index] = this.tmpActor;
    this.selectedIndex = -1;
  }

  handleKey(index, event) {
    if (event.key === 'Escape') {
      this.cancelEdit(index);
    }
  }

  sortList(prop, direction) {
    const comparator = (first, second) => {
      if (direction === 'ascending') {
        if (first[prop] < second[prop]) {
          return -1;
        }
        if (first[prop] > second[prop]) {
          return 1;
        }
        return 0;
      }
      if (direction === 'descending') {
        if (first[prop] > second[prop]) {
          return -1;
        }
        if (first[prop] < second[prop]) {
          return 1;
        }
        return 0;
      }
    };
    this.actorList.sort(comparator);
  }

  restoreList() {
    this.actorList = this.tmpActorList.slice();
  }
}

