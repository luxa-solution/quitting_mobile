import { apiFetch } from '@/core/api';
import type { RegisterDto, RegisterResponseDto } from '@/features/auth/types';
import { AUTH_ENDPOINTS } from '../endpoints';

export function registerMutation(payload: RegisterDto) {
  return apiFetch<RegisterResponseDto>(AUTH_ENDPOINTS.register(), {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
