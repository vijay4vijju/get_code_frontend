import { GetCodeFrontendPage } from './app.po';

describe('get-code-frontend App', function() {
  let page: GetCodeFrontendPage;

  beforeEach(() => {
    page = new GetCodeFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
