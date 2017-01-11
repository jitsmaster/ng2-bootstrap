import { TimepickerDemoComponent } from './timepicker-demo.component';
import { DemoTimepickerBasicComponent } from './basic/basic';
import { DemoTimepickerConfigComponent } from './config/config';
import { DemoTimepickerMeridianComponent } from './meridian/meridian';

export const DEMO_COMPONENTS = [
  TimepickerDemoComponent, DemoTimepickerBasicComponent, DemoTimepickerConfigComponent, DemoTimepickerMeridianComponent
];

export const DEMOS = {
  basic: {
    component: require('!!raw?lang=typescript!./basic/basic'),
    html: require('!!raw?lang=markup!./basic/basic.html')
  },
  meridian: {
    component: require('!!raw?lang=typescript!./meridian/meridian'),
    html: require('!!raw?lang=markup!./meridian/meridian.html')
  },
  config: {
    component: require('!!raw?lang=typescript!./config/config'),
    html: require('!!raw?lang=markup!./config/config.html')
  },
  old: {
    component: require('!!raw?lang=typescript!./timepicker-demo.component'),
    html: require('!!raw?lang=markup!./timepicker-demo.component.html')
  }
};
