import type { RegisterDto, RegisterResponseDto } from '@/features/auth/types';
import { apiFetch } from '../client';
import { AUTH_ENDPOINTS } from '../endpoints';

export function registerMutation(payload: RegisterDto) {
  return apiFetch<RegisterResponseDto>(AUTH_ENDPOINTS.register(), {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
