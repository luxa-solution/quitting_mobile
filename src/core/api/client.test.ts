import { apiFetch } from './client';

describe('apiFetch', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('returns null when ok and json parsing fails (data stays null)', async () => {
    jest.spyOn(global, 'fetch' as any).mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => {
        throw new Error('invalid json');
      },
    } as any);

    const data = await apiFetch<unknown>('/api/register', { method: 'POST' });
    expect(data).toBeNull();
  });

  it('throws ApiError with fallback message when response is not ok and JSON parsing fails', async () => {
    jest.spyOn(global, 'fetch' as any).mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => {
        throw new Error('invalid json');
      },
    } as any);

    await expect(apiFetch('/api/register', { method: 'POST' })).rejects.toMatchObject({
      name: 'ApiError',
      status: 500,
      message: 'Request failed (500)',
    });
  });
});
