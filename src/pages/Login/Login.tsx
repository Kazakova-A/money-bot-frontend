import React, { memo, useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'store/reducers';
import { AuthActions } from 'store/actions/auth';
import { LoginPhases } from 'store/types/auth';

import styles from './Login.module.scss';

const Login = (): JSX.Element => {
  const dispath = useDispatch();
  const [username, setUsername] = useState<string>('');
  const [confirmCode, setConfirmCode] = useState<string | number>('');

  const isLoading = useSelector<RootState, boolean>((state: RootState) => state.auth.isLoading);
  const loginPhase = useSelector<RootState, LoginPhases>((state: RootState) => state.auth.loginPhase);
  const userName = useSelector<RootState, string>((state: RootState) => state.auth.userName);

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/, '');
    setConfirmCode(value);
  };

  const goToNextStep = () => {
    dispath(AuthActions.sendConfirmCodeRequest(username));
  };

  const goBack = () => {
    dispath(AuthActions.changeLoginPhase(LoginPhases.sendConfirmation));
    setConfirmCode('');
  };

  const confirmLogin = () => {
    dispath(AuthActions.logInRequest({ name: userName, token: confirmCode as number }));
  };

  return (
    <Container>
      <div className={styles.container}>
        <Typography variant="h4" component="h3" align="center">
          Вход
        </Typography>
        {loginPhase === LoginPhases.sendConfirmation && (
          <div className={styles.inputContainer}>
            <TextField
              value={username}
              onChange={onUsernameChange}
              variant="outlined"
              label="Username"
              className={styles.input}
              size="small"
            />
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={goToNextStep}
              disabled={isLoading || !username.trim()}
            >
              Next step
            </Button>
          </div>
        )}
        {loginPhase === LoginPhases.confirmLogin && (
        <div className={styles.inputContainer}>
          <TextField
            label="Code"
            variant="outlined"
            size="small"
            value={confirmCode}
            onChange={onCodeChange}
            className={styles.input}
          />
          <div className={styles.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              onClick={goBack}
              disabled={isLoading}
            >
              Go back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={confirmLogin}
              disabled={isLoading || !confirmCode.toString().trim()}
            >
              Ok
            </Button>
          </div>
        </div>
        )}
      </div>
    </Container>
  );
};

export default memo(Login);
