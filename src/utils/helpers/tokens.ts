export const saveToken = (access: string, refresh: string): void => {
  localStorage.setItem('accessToken', access);
  localStorage.setItem('refreshToken', refresh);
};

export const getToken = (): string | null => localStorage.getItem('accessToken');

export const removeTokens = (): void => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};
