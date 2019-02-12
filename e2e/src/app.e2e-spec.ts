import {AppPage, Widget} from './app.po';
import {browser, logging, element, by} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    // Protractor is waiting until Angular is ready
    expect(await page.getTitleText()).toEqual('Welcome to enterpisy-thing!');
  });

  it('should display 5 widgets', async () => {
    await page.navigateTo();
    expect(page.getWidgetCount()).toEqual(5);
  });

  it('should have widget 1 with title', async () => {
    await page.navigateTo();
    const widget = await page.getWidgetByIndex(0);
    expect(await widget.getText()).toEqual('Some header');
  });

  it('should drag first widget', async () => {
    await page.navigateTo();

    // This part is not so stable
    const widget = await page.getWidgetByIndex(0);
    await browser.actions().mouseMove(widget.element).perform();
    await browser.actions().mouseDown().perform();
    await browser.actions().mouseMove({x: 5, y: 5}).perform();
    await browser.actions().mouseUp().perform();

    // await page.dragFromTo({x: 100, y: 200}, {x: 100, y: 230});

    browser.sleep(9999); // Forgotten await
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
