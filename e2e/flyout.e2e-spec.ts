import {
  element,
  browser,
  by
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Flyout', () => {
  it('should match previous screenshot', (done) => {
    SkyHostBrowser.get('visual/flyout');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('.sky-btn-primary')).click();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'flyout-lg'
    });
    element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/flyout');
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('.sky-btn-primary')).click();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'flyout-xs'
    });
    element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
  });

  it('should handle absolutely positioned items inside the flyout', (done) => {
    SkyHostBrowser.get('visual/flyout');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('.sky-btn-primary')).click();
    browser.sleep(250);
    element(by.css('.sky-flyout .sky-dropdown-button')).click();
    SkyHostBrowser.moveCursorOffScreen();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'flyout-absolute-lg'
    });
    element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
  });

  it('should handle absolutely positioned items inside the flyout (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/flyout');
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('.sky-btn-primary')).click();
    browser.sleep(250);
    element(by.css('.sky-flyout .sky-dropdown-button')).click();
    SkyHostBrowser.moveCursorOffScreen();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'flyout-absolute-xs'
    });
    element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
  });

  it('should match previous screenshot when row iterators are enabled', (done) => {
    SkyHostBrowser.get('visual/flyout');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('#open-flyout-with-iterators')).click();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'flyout-iterators-lg'
    });
    element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
  });

  it('should match previous screenshot when row iterators are enabled (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/flyout');
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('#open-flyout-with-iterators')).click();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'flyout-iterators-xs'
    });
    element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
  });

  it('should match previous screenshot when row iterators are disabled', (done) => {
    SkyHostBrowser.get('visual/flyout');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('#open-flyout-with-iterators-disabled')).click();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'flyout-no-iterators-lg'
    });
    element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
  });

  it('should match previous screenshot when row iterator are disabled (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/flyout');
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('#open-flyout-with-iterators-disabled')).click();
    expect('body').toMatchBaselineScreenshot(done, {
      screenshotName: 'flyout-no-iterators-xs'
    });
    element(by.css('.sky-flyout .sky-flyout-btn-close')).click();
  });
});
