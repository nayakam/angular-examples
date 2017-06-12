import { AngularCliEgPage } from './app.po';

describe('angular-cli-eg App', () => {
  let page: AngularCliEgPage;

  beforeEach(() => {
    page = new AngularCliEgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
