import { Component, OnInit } from '@angular/core';
import { FormsService } from '../forms.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor(private fs: FormsService) { }

  personal = this.fs.personal;

  getfirst()
  {
    if(this.personal.controls['first'].hasError('required'))
    {
      return "First Name reuqired"
    }

    return 0;
  }

  getlast()
  {
    if(this.personal.controls['last'].hasError('required'))
    {
      return "Last Name required";
    }
    return 0;
  }

  getemail()
  {
    if(this.personal.controls['email'].hasError('required'))
    {
      return "Email reuqired"
    }
    return 0;
  }

  getphone()
  {
    if(this.personal.controls['phone'].hasError('required'))
    {
      return "Phone Number required";
    }

    return 0;
  }





  ngOnInit(): void {
  }

}
