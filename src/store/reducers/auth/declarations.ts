export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: any;
  email: string;
  userName: string;
  token: string | null;
}
