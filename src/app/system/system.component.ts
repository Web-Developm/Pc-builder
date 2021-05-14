import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { FormsService } from '../forms.service';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PersonalComponent } from '../personal/personal.component';
import { ConfComponent } from '../conf/conf.component';
@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css'],
  providers: [FormsService]
})
export class SystemComponent implements OnInit {

  constructor(private fs: FormsService, private resolver: ComponentFactoryResolver) { }

  personal:FormGroup=this.fs.personal;

  system:FormGroup=this.fs.conf;

  pc1=this.system.get('pc') as FormArray;

  @ViewChild('personal', { static: false, read: ViewContainerRef }) target!: ViewContainerRef;
  public componentRef!: ComponentRef<any>;

  i: any;

  addPersonal() {
    if (this.i == this.componentRef) {
      let childComponent: any = this.resolver.resolveComponentFactory(PersonalComponent);
      this.componentRef = this.target.createComponent(childComponent);
    }

    else {
      alert("Already created");
    }
  }

  @ViewChild('system', { static: false, read: ViewContainerRef }) target1!: ViewContainerRef;
  public componentRef1!: ComponentRef<any>;

  addSystem() {
      let childComponent: any = this.resolver.resolveComponentFactory(ConfComponent);
      this.componentRef1 = this.target1.createComponent(childComponent);
  }

  display()
  {
    console.log(this.personal.value);
    console.log(this.system.value);
  }

  ngOnInit(): void {
  }

}
