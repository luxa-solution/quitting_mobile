import { apiFetch } from '@/core/api';
import { AUTH_ENDPOINTS } from '../endpoints';
import { registerMutation } from './register';

// mock apiFetch used by registerMutation
jest.mock('@/core/api', () => ({
  apiFetch: jest.fn(),
}));

describe('registerMutation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls apiFetch with register endpoint and POST body', async () => {
    (apiFetch as jest.Mock).mockResolvedValueOnce({ message: 'ok' });

    const payload = { email: 'test@example.com', password: 'Abcdef1!' };

    await registerMutation(payload as any);

    expect(apiFetch).toHaveBeenCalledTimes(1);
    expect(apiFetch).toHaveBeenCalledWith(AUTH_ENDPOINTS.register(), {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  });
});
