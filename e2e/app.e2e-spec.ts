import { ECSPage } from './app.po';

describe('ecs App', () => {
  let page: ECSPage;

  beforeEach(() => {
    page = new ECSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
