import Redirect from '../src/redirect-to-page';
describe('Redirect', () => {
  describe('When a redirect token has been issued', () => {
    describe('When next page and current page are different', () => {
      it('should redirect', () => {
        const TestRedirect = Object.create(Redirect);
        const mockPushFunction = jest.fn();
        TestRedirect.init(mockPushFunction, 'foo=bar&baz=zab&redirect=true', 1, 2);
        TestRedirect.redirect();
        expect(mockPushFunction.mock.calls.length).toBe(1);
        // New query should not contain the redirect token
        expect(mockPushFunction.mock.calls[0][0]).toBe("2?baz=zab&foo=bar");
      });
    });
    describe('When next page and current page are not the same', () => {
      it('should not redirect', () => {
        const TestRedirect = Object.create(Redirect);
        const mockPushFunction = jest.fn();
        TestRedirect.init(mockPushFunction, 'foo=bar&baz=zab&redirect=true', 1, 1);
        TestRedirect.redirect();
        expect(mockPushFunction.mock.calls.length).toBe(0);
      });
    });
  });


  describe('When a redirect token has not issued', () => {
    describe('When next page and current page are different', () => {
      it('should not redirect', () => {
        const TestRedirect = Object.create(Redirect);
        const mockPushFunction = jest.fn();
        TestRedirect.init(mockPushFunction, 'foo=bar&baz=zab', 1, 2);
        TestRedirect.redirect();
        expect(mockPushFunction.mock.calls.length).toBe(0);
      });
    });
    describe('When next page and current page are not the same', () => {
      it('should not redirect', () => {
        const TestRedirect = Object.create(Redirect);
        const mockPushFunction = jest.fn();
        TestRedirect.init(mockPushFunction, 'foo=bar&baz=zab', 1, 1);
        TestRedirect.redirect();
        expect(mockPushFunction.mock.calls.length).toBe(0);
      });
    });
  });

});