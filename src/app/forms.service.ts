import { Injectable,OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService implements OnInit {


  conf: FormGroup;

  constructor(private fs: FormBuilder) {
    this.conf = this.fs.group({
      pc: this.fs.array([this.fields()])
    })
  }

  personal = this.fs.group({
    first: ['', [Validators.required]],
    last: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]]
  });

  pc(): FormArray {
    return this.conf.get('pc') as FormArray;
  }

  fields(): FormGroup {
    return this.fs.group({
      name: [''],
      version: [''],
      number: [''],
      storage:[''],

    })
  }

  add() {
    this.pc().push(this.fields());
  }

  delete(index: any) {
    this.pc().removeAt(index);
  }

  ngOnInit():void{
    this.personal;
    this.conf;
  }


}
