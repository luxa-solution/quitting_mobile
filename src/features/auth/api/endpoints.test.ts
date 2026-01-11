import { AUTH_ENDPOINTS } from './endpoints';

describe('AUTH_ENDPOINTS', () => {
  it('register() returns the register path', () => {
    expect(AUTH_ENDPOINTS.register()).toBe('/api/register');
  });
});
