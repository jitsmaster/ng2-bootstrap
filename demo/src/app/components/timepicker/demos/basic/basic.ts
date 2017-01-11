import { Component } from '@angular/core';

@Component({
  selector: 'demo-timepicker-basic',
  templateUrl: './basic.html'
})
export class DemoTimepickerBasicComponent {
  public hstep:number = 1;
  public mstep:number = 15;
  public ismeridian:boolean = true;
  public isEnabled:boolean = true;

  public mytime:Date = new Date();
  public options:any = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  public toggleMode():void {
    this.ismeridian = !this.ismeridian;
  }

  public update():void {
    let d = new Date();
    d.setHours(14);
    d.setMinutes(0);
    this.mytime = d;
  }

  public changed():void {
    console.log('Time changed to: ' + this.mytime);
  }

  public clear():void {
    this.mytime = void 0;
  }
}
