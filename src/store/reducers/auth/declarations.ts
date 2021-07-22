import { LoginPhases } from 'store/types/auth';

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: any;
  loginPhase: LoginPhases;
  userName: string;
  token: string | null;
}
