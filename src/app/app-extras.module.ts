import {
  NgModule
} from '@angular/core';

import {
  NoopAnimationsModule
} from '@angular/platform-browser/animations';

import {
  SkyDropdownModule
} from '@skyux/popovers';

import {
  SkyFlyoutModule,
  SkyFlyoutService
} from './public';

import {
  FlyoutDemoComponent
} from './visual/flyout/flyout-demo.component';
import { SkyModalModule } from '@skyux/modals/modules/modal';
import { SkyFlyoutModalDemoComponent } from './visual/flyout/flyout-modal.component';

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
