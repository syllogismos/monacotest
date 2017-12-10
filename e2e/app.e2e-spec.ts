import { TestmonacoPage } from './app.po';

describe('testmonaco App', () => {
  let page: TestmonacoPage;

  beforeEach(() => {
    page = new TestmonacoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
