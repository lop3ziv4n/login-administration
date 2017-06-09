import { LoginAdministrationPage } from './app.po';

describe('login-administration App', () => {
  let page: LoginAdministrationPage;

  beforeEach(() => {
    page = new LoginAdministrationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
