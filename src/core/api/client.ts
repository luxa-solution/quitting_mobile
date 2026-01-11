import { API_BASE_URL } from './config';

type ApiErrorShape = { message?: string };

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

export async function apiFetch<TResponse>(path: string, options: RequestInit): Promise<TResponse> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
  });

  let data: unknown = null;
  try {
    data = await res.json();
  } catch {
    // ignore JSON parse errors
  }

  if (!res.ok) {
    const message = (data as ApiErrorShape | null)?.message ?? `Request failed (${res.status})`;
    throw new ApiError(message, res.status);
  }

  return data as TResponse;
}
