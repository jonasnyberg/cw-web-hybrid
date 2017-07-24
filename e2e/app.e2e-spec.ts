import { CwAsdPage } from './app.po';

describe('cw-asd App', () => {
  let page: CwAsdPage;

  beforeEach(() => {
    page = new CwAsdPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
