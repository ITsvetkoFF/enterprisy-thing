import { AppPage, Widget } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    // Protructor is waiting until Angular is done
    expect(await page.getTitleText()).toEqual('Welcome to enterpisy-thing!');
  });

  it('should display 5 widgets', async () => {
    await page.navigateTo();
    expect(page.getWidgetCount()).toEqual(5);
  });

  fit('should drag first widget', async () => {
    await page.navigateTo();
    await page.dragFromTo({x: 100, y: 200}, {x: 100, y: 230});
    await browser.sleep(9999);
    // DO screenshot here!
  });

  afterEach(async () => {
    // This is actually useful! (but should not pollute every test)
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
