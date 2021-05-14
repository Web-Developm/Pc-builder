import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-conf',
  templateUrl: './conf.component.html',
  styleUrls: ['./conf.component.css']
})
export class ConfComponent implements OnInit {

  constructor(private fs: FormsService) { }

  conf: FormGroup = this.fs.conf;

  pc: FormArray = this.conf.get('pc') as FormArray;

  add() {
    this.fs.add();
  }

  delete(index: any) {
    this.fs.delete(index);
  }

  name = [
    {
      value: 'Laptop', viewValue: 0
    },

    {
      value: 'Desktop', viewValue: 1
    }
  ];

  icon = ['laptop', 'desktop'];

  version = [
    {
      value: 'Intel Core i3-8100', viewValue: 0
    },

    {
      value: 'Intel Core i5 9400F', viewValue: 1
    },

    {
      value: 'Intel Core i7 9700', viewValue: 2
    },

    {
      value: 'Intel Core i9', viewValue: 3
    }
  ];

  windows = ['windows'];

  memory = [
    {
      value: '4GB', viewValue: 0
    },
    {
      value: '8GB', viewValue: 1
    },
    {
      value: '16GB', viewValue: 2
    },

    {
      value: '32GB', viewValue: 3
    }
  ];

  micon = ['memory'];

  storage = [
    {
      value: '120GB SSD', viewValue: '120GB SSD'
    },

    {
      value: '256GB SSD', viewValue: '256GB SSD'
    },

    {
      value: '512GB SSD', viewValue: '512GB SSD'
    },

    {
      value: '1TB SSD ', viewValue: '1TB SSD'
    }
  ];

  si = ['hdd'];

  ngOnInit(): void {
  }

}
