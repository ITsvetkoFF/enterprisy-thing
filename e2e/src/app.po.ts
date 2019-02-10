import { browser, by, element, ElementFinder } from 'protractor';

export class Widget {
  private _element: ElementFinder;

  constructor(element: ElementFinder) {
    this._element = element;
  }

  getText() {
    return this._element.getText();
  }

  dragTo(deltaX: number, deltaY: number) {

  }
}

export class AppPage {
  async navigateTo() {
    return await browser.get(browser.baseUrl); // in protractor.conf.js it is localhost:4200
  }

  async getTitleText() {
    return await element(by.css('app-root h1')).getText();
  }

  async getWidgetByIndex(index: number) {
    return new Widget(await element.all(by.className('widget-placeholder')).get(index));
  }
  async getWidgetCount() {
    return element.all(by.css('.widget-placeholder')).count();
  }

  async dragFromTo(from: {x: number, y: number}, to: {x: number, y: number}) {
    await browser.actions().mouseMove(from).perform();
    await browser.actions().mouseDown().perform();
    await browser.actions().mouseMove(to).perform();
    await browser.actions().mouseUp().perform();
  }
  
}
