export type RegisterDto = {
  email: string;
  password: string;
};

export type RegisterResponseDto = {
  message?: string;
  token?: string;
  user?: unknown;
};
