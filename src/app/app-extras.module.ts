import {
  NgModule
} from '@angular/core';

import {
  NoopAnimationsModule
} from '@angular/platform-browser/animations';

import {
  SkyModalModule
} from '@skyux/modals/modules/modal';

import {
  SkyDropdownModule
} from '@skyux/popovers';

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
  imports: [
    NoopAnimationsModule
  ],
  exports: [
    SkyFlyoutModule,
    SkyDropdownModule,
    SkyModalModule
  ],
  entryComponents: [
    FlyoutDemoComponent,
    SkyFlyoutModalDemoComponent
  ]
})
export class AppExtrasModule { }
