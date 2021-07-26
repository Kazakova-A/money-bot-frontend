export default function removeTokens(): void {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
}
