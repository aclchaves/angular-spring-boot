import { AngularSpringBootPage } from './app.po';

describe('angular-spring-boot App', function() {
  let page: AngularSpringBootPage;

  beforeEach(() => {
    page = new AngularSpringBootPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
