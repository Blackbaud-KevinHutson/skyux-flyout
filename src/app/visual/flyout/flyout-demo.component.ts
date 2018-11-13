import {
  Component
} from '@angular/core';

import {
  SkyModalService
} from '@skyux/modals/modules/modal';

import {
  SkyFlyoutService
} from '../../public/modules/flyout/flyout.service';

import {
  SkyFlyoutModalDemoComponent
} from './flyout-modal.component';
import { FlyoutDemoContext } from './flyout-demo-context';

@Component({
  selector: 'sky-test-cmp-flyout',
  templateUrl: './flyout-demo.component.html',
  providers: [SkyFlyoutService]
})
export class FlyoutDemoComponent {
  constructor(
    public context: FlyoutDemoContext,
    private modalService: SkyModalService
  ) { }

  public openModal(): void {
    this.modalService.open(SkyFlyoutModalDemoComponent);
  }
}
