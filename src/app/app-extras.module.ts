import {
  NgModule
} from '@angular/core';

// import {
//   NoopAnimationsModule
// } from '@angular/platform-browser/animations';

import {
  SkyModalModule
} from '@skyux/modals';

import {
  SkyDropdownModule
} from '@skyux/popovers';

import {
  SkyAppLinkModule
} from '@skyux/router';

import {
  SkyToastModule
} from '@skyux/toast';

import {
  SkyFlyoutModule
} from './public';

import {
  FlyoutDemoComponent
} from './visual/flyout/flyout-demo.component';

import {
  SkyFlyoutModalDemoComponent
} from './visual/flyout/flyout-modal.component';

@NgModule({
  // imports: [
  //   NoopAnimationsModule
  // ],
  exports: [
    SkyFlyoutModule,
    SkyDropdownModule,
    SkyModalModule,
    SkyAppLinkModule,
    SkyToastModule
  ],
  entryComponents: [
    FlyoutDemoComponent,
    SkyFlyoutModalDemoComponent
  ]
})
export class AppExtrasModule { }
